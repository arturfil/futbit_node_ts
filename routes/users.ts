import { Router, Request, Response } from 'express';
import { loginUser, signUpUser } from '../controllers/userController';
const router:Router = Router();

router.post('/signup', signUpUser);
router.post("/login", loginUser);

export default router;