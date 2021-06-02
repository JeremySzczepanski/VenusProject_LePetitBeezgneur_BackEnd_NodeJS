import { Router, Request, Response, NextFunction } from 'express';
import { Terrain, TerrainModel } from '../Models/terrain_model';

export namespace TerrainController
{

    export async function getAll(req: Request, res: Response, next: NextFunction)
    {
        const results = await TerrainModel.getAll();
        res.json(results);
    }

    export async function insertTerrain (req: Request, res: Response, next: NextFunction)
    {
        try
        {
            console.log(req.body);
            const terrain = new Terrain(req.body);
            const results = await TerrainModel.insertTerrain(terrain);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }


}