import { Router } from 'express'
import { deleteUser, getUsers, updateUser } from '../controllers/userController';
const router:Router = Router(); 

router.get('/', getUsers)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser);