import { Router, Request, Response } from 'express';
import { loginUser, signUpUser } from '../controllers/authController';
const router:Router = Router();

router.post('/signup', signUpUser);
router.post("/login", loginUser);

export default router;