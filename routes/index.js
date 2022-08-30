import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers); //Delete code verifyToken to test the API without token access
router.post('/users', Register); //Request http for register
router.post('/login', Login); //Request http for login
router.get('/token', refreshToken); //Request http for refresh token
router.delete('/logout', Logout); ////Request http for logout

export default router;