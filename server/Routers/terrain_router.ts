import { Router } from 'express';
import { TerrainController } from '../Controllers/terrain_controller';

export class TerrainRouter
{
    public router: Router;

    constructor()
    {
        this.router = Router();

        this.router.get('/', TerrainController.getAll);
        this.router.post('/create', TerrainController.insertTerrain);
        
        //this.router.get('/id/:id', TerrainController.getOneByID);
        //this.router.get('/name/:name', TerrainController.getOneByName);
        //this.router.delete('/:id', TerrainController.deleteUser);
        //this.router.put('/:id', TerrainController.updateUserByID);
    }
}