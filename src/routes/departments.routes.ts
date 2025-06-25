import { Router } from 'express';
import { getAllDepartments } from '../controllers/departments.controller';

const router = Router();

router.get('/', getAllDepartments);

export default router;
