import { Request, Response } from 'express';
import prisma from '../prisma';

export const getAllDepartments = async (_req: Request, res: Response) => {
  try {
    const departments = await prisma.departamento.findMany({
      include: {
        cultivos: {
          include: {
            cultivo: true
          }
        }
      }
    });

    const formatted = departments.map((dep: any) => ({
      id: dep.id,
      nombre: dep.nombre,
      cultivos: dep.cultivos.map((c: any) => c.cultivo.nombre)
    }));

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
};