import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import sendEmail from "../utils/emailService.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const generateToken = (id) => {
   return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"3d"})
}

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new apiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new apiError(400, "User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  if (user) {
    const message = `
Hi ${username},

🎉 Welcome to GoalGrid!
Your account has been created successfully.
We're excited to have you on board. Start organizing your goals, tracking your progress, and achieving more every day.
Thank you for joining GoalGrid!

Best regards,
The GoalGrid Team
`;

    await sendEmail(
      email,
      "🎉 Welcome to GoalGrid!",
      message
    );
  }

  const createdUser = await User.findById(user._id).select("-password");
  const token = generateToken(user._id);

  return res.status(201).json(
    new apiResponse(
      201,
      { user: createdUser, token },
      "User created successfully"
    )
  );
});

const loginUser = asyncHandler(async(req,res)=> {
    const{email,password} = req.body
    if(!email || !password){
        throw new apiError(401,"all fields are required")
    }
    const user = await User.findOne({email})
    if(!user){
        throw new apiError(400,"User does not exist")
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(isPasswordValid){
        throw new apiError(400,"password is incorrect")
    }
    const token = generateToken(user._id)
    const loggedInUser = await User.findById(user._id).select("-password")
    return res
    .status(200)
    .json(
        new apiResponse(200,{user:loggedInUser,token},"User logged in Successfully")
    )
})

const getUsers = asyncHandler(async(req,res)=> {
   const users = await User.find({}).select("username email")
    return res
    .status(200)
    .json(
         new apiResponse(200,users,"ALL users fetched Successfully")
    )
})
