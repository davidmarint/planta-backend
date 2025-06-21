import { Router } from 'express';
import { obtenerCultivos } from '../controllers/cultivos.controller';

const router = Router();

router.get('/', obtenerCultivos);

export default router;