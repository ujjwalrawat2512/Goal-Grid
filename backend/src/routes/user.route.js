import { Router } from "express";
import { getCurrentUser,
    logoutUser,
    changeCurrentPassword,
    updateUserProfile } from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/me").get(protect,getCurrentUser)
router.route("/update-profile").patch(protect,updateUserProfile)
router.route("/change-password").post(protect,changeCurrentPassword)
router.route("/logout").post(protect,logoutUser)

export default router