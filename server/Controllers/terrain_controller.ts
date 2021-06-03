import { Router, Request, Response, NextFunction } from 'express';
import { Terrain, TerrainModel } from '../Models/terrain_model';

export namespace TerrainController
{

    export async function getAll(req: Request, res: Response, next: NextFunction)
    {
        const results = await TerrainModel.getAll();
        res.json(results);
    }

    export async function createTerrain (req: Request, res: Response, next: NextFunction)
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

    export async function getOneByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await TerrainModel.getOneByID(req.params.id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }


    export async function updateTerrainByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const terrain = new Terrain(req.body);
            const results = await TerrainModel.updateTerrainByID(req.params.id, terrain);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    export async function deleteTerrain(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await TerrainModel.deleteTerrainByID(req.params.id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

}