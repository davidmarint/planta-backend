import { Request, Response } from 'express';
import prisma from '../prisma';

export const obtenerCultivos = async (_req: Request, res: Response) => {
  try {
    const cultivos = await prisma.cultivo.findMany({
      include: {
        departamentos: {
          include: {
            departamento: true
          }
        }
      }
    });
    res.json(cultivos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener cultivos' });
  }
};