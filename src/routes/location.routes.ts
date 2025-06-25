import { Router } from 'express';
import { getCultivosByLocation } from '../controllers/location.controller';

const router = Router();

router.post('/', getCultivosByLocation);

export default router;
