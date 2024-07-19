import express from 'express'
import { refresh, logout } from '../controllers/authController'

const router = express.Router()

// In the app, all of these routes fall under the '/auth' base route.
router.get('/refresh', refresh)

router.post('/logout', logout)

export default router