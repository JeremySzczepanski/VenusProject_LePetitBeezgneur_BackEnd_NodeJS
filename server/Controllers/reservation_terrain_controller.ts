import { Router, Request, Response, NextFunction } from 'express';
import { ReservationTerrain, ReservationTerrainModel } from '../Models/reservation_terrain_model';



export namespace ReservationTerrainController
{
    export async function getAll(req: Request, res: Response, next: NextFunction)
    {
        const results = await ReservationTerrainModel.getAll();
        res.json(results);
    }


    export async function getOneByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await ReservationTerrainModel.getOneByID(req.params.id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    export async function createReservationTerrain(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            console.log(req.body);
            const reservation_terrain = new ReservationTerrain(req.body);
            const results = await ReservationTerrainModel.insertReservationTerrain(reservation_terrain);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

}



