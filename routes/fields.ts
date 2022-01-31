import { Router } from 'express';
import { createField, deleteField, getAllFields, getFieldById } from '../controllers/fieldController';
const router:Router = Router();

router.get("/", getAllFields);
router.get("/field/:id", getFieldById);
router.post("/field", createField);
router.delete("field/:id", deleteField);

export default router;