import express from "express";
import userController from "../controllers/userController"
import { verifyJWT } from "../middleware/verifyJWT";

const router = express.Router()

// In the app, all of these routes fall under the '/user' base route.
router.post('/register', userController.registerUser)

router.post('/login', userController.loginUser)

router.route('/update')
        .put(verifyJWT, userController.updateUser)

router.route('/delete')
        .delete(verifyJWT, userController.deleteUser)
        
router.post('/registerAdmin', userController.registerAdmin)

router.route('/info')
        .get(verifyJWT, userController.getInfo)

export default router
