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

    export async function createCommande (req: Request, res: Response, next: NextFunction)
    {
        try
        {
            console.log(req.body);
            const commande = new Commande(req.body);
            const results = await CommandeModel.insertCommande(commande);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }
    
}