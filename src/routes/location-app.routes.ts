import { Router } from 'express';
import { getCultivosByLocation1 } from '../controllers/location.controller';

const router = Router();

router.post('/', getCultivosByLocation1);

export default router;
