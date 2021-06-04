import { Router } from 'express';
import { CommandeController } from '../Controllers/commande_controller';

export class CommandeRouter
{
    public router: Router;

    constructor()
    {
        this.router = Router();

        this.router.get('/', CommandeController.getAll);
        this.router.get('/id/:id', CommandeController.getOneByID);
        this.router.post('/create', CommandeController.createCommande);
        // this.router.delete('/:id', CommandeController.deleteCommande);
        // this.router.put('/:id', CommandeController.updateCommandeByID);
        
        //this.router.get('/name/:name', CommandeController.getOneByName);
    }

}