import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"


const getCurrentUser = asyncHandler(async(req,res)=> {
    const user = await User.findById(req.user._id).select("-password")
    if(!user){
        throw new apiError(401,"user not found")
    }
    return res
    .status(200)
    .json(
        new apiResponse(200,user,"User fetched successfully")
    )
})
const updateUserProfile = asyncHandler(async(req,res)=>{
    const{username,email} = req.body
    if(!username || !email){
        throw new apiError(400,"user not found")
    }
    user.username = username || user.username
    user.email = email || user.email

    const updatedUser = await User.save()
    return res.status(200).json(
    new apiResponse(
      200,
      {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
      },
      "Profile updated successfully"
    )
  );
})

const changeCurrentPassword = asyncHandler(async(req,res)=> {
  const{oldPassword,newPassword} = req.body
  
  if (!oldPassword || !newPassword) {
        throw new apiError(400, "Old password and new password are required");
    }

  const user = await User.findById(req.user._id)
  const isPasswordValid = await bcrypt.compare(oldPassword,user.password)
   if(!isPasswordValid){
    throw new apiError(401,"worng old Password")
   }
   const salt  = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save()
    return res
    .status(200)
    .json(
      new apiResponse(200,{},"password changed succesfully")
    )
})

const logoutUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new apiResponse(200, {}, "User logged out successfully")
        );
});

export {getCurrentUser,updateUserProfile,changeCurrentPassword,logoutUser}