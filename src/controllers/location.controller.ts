import { Request, Response } from 'express';
import prisma from '../prisma';

export const getCultivosByLocation1 = async (_req: Request, res: Response): Promise<Response | void> => {
  const { latitude, longitude } = _req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Missing latitude or longitude' });
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );

    const data = await response.json();

    const departamentoNombre = data.address?.state;

    if (!departamentoNombre) {
      return res.status(404).json({ error: 'Departamento not found in geolocation result' });
    }

    const departamento = await prisma.departamento.findFirst({
      where: {
        nombre: {
          equals: departamentoNombre.toLowerCase(),
          mode: 'insensitive'
        }
      },
      include: {
        cultivos: {
          include: {
            cultivo: true
          }
        }
      }
    });

    if (!departamento) {
      return res.status(404).json({ error: 'Departamento not found in database' });
    }

    const result = {
      id: departamento.id,
      nombre: departamento.nombre,
      cultivos: departamento.cultivos.map((c: any) => c.cultivo.nombre)
    };

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error determining departamento from location'});
  }
};
