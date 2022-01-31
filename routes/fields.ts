import { Router } from 'express';
import { createField, deleteField, getAllFields, getFieldById } from '../controllers/fieldController';
const router:Router = Router();

router.get("/", getAllFields);
router.post("/field", createField);
router.get("/field/:id", getFieldById);
router.delete("field/:id", deleteField);

export default router;