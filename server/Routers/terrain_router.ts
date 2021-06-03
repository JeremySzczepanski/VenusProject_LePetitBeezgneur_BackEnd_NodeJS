import { Router } from 'express';
import { TerrainController } from '../Controllers/terrain_controller';

export class TerrainRouter
{
    public router: Router;

    constructor()
    {
        this.router = Router();

        this.router.get('/', TerrainController.getAll);
        this.router.get('/id/:id', TerrainController.getOneByID);
        this.router.post('/create', TerrainController.createTerrain);
        this.router.delete('/:id', TerrainController.deleteTerrain);
        this.router.put('/:id', TerrainController.updateTerrainByID);
        
        //this.router.get('/name/:name', TerrainController.getOneByName);
    }
}