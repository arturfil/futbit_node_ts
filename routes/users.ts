import { Router } from 'express';
import { signUpUser } from '../controllers/userController';
const router:Router = Router();

router.post('/signup', signUpUser);

export default router;