import express from 'express';
import dotenv from 'dotenv';
import prisma from './prisma';
import cultivosRoutes from './routes/cultivos.routes';
import departmentsRoutes from './routes/departments.routes';
import locationRoutes from './routes/location.routes';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/api/cultivos', cultivosRoutes);
app.use('/api/departments', departmentsRoutes);
app.use('/api/location-cultivos', locationRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});