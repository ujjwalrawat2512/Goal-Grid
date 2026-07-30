import {Router} from "express"
import { loginUser,registerUser,getUsers } from "../controllers/auth.controller.js"
import { protect } from "../middleware/auth.middleware.js"

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/get-users").get(protect,getUsers)

export default router