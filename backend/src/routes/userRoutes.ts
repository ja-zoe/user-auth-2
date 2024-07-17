import express from "express";
import userController from "../controllers/userController"

const router = express.Router()

// In the app, all of these routes fall under the '/user' base route.
router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.put('/update', userController.updateUser)
router.delete('/delete', userController.deleteUser)
router.post('/registerAdmin', userController.registerAdmin)

export default router
