import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"
import { apiError } from "../utils/apiError.js";

const protect = async(req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded= jwt.verify(token,process.env.JWT_SECRET)
            const user = await User.findById(decoded.id).select("-password");
            if (!user) {
            throw new apiError(404, "User not found");
            }

            req.user = user;
            next();
        } catch (error) {
            throw new apiError(401,"Token invalid auhorization failed")
        }
    }
    if(!token){
        throw new apiError(401,"No token authorization not granted")
    }
}
export {protect}