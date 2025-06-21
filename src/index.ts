import express from 'express';
import dotenv from 'dotenv';
import prisma from './prisma';
import cultivosRoutes from './routes/cultivos.routes';


dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/api/cultivos', cultivosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});