import { Router, Request, Response, NextFunction } from 'express';
import { Commande, CommandeModel } from '../Models/commande_model';

export namespace CommandeController
{

    export async function getAll(req: Request, res: Response, next: NextFunction)
    {
        const results = await CommandeModel.getAll();
        res.json(results);
    }

    export async function getOneByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await CommandeModel.getOneByID(req.params.id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    




}