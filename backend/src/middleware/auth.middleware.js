import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"
import { apiError } from "../utils/apiError.js";

const protect = async(req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const secret = process.env.JWT_SECRET || "goalgrid_secret_key_2026_super_secure";
            const decoded = jwt.verify(token, secret);
            const user = await User.findById(decoded.id).select("-password");

            if (!user) {
                return next(new apiError(404, "User not found"));
            }

            req.user = user;
            return next();
        } catch (error) {
            return next(new apiError(401, "Token invalid, authorization failed"));
        }
    }

    if (!token) {
        return next(new apiError(401, "No token, authorization not granted"));
    }
};

export { protect };