import { Router, Request, Response } from 'express';
import { signUpUser } from '../controllers/userController';
const router:Router = Router();

router.post('/signup', signUpUser);
router.get("/", (req: Request, res: Response) => {

})

export default router;