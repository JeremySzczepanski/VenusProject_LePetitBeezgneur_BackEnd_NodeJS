import { Router } from 'express';
import { ReservationTerrainController } from '../Controllers/reservation_terrain_controller';

export class ReservationTerrainRouter
{
    public router: Router;

    constructor()
    {
        this.router = Router();

        this.router.get('/', ReservationTerrainController.getAll);
        this.router.get('/id/:id', ReservationTerrainController.getOneByID);
        this.router.post('/create', ReservationTerrainController.createReservationTerrain);
        //this.router.delete('/:id', ReservationTerrainController.deleteTerrain);
        //this.router.put('/:id', ReservationTerrainController.updateTerrainByID);
     
        
        //this.router.get('/name/:name', ReservationTerrainController.getOneByName);
    }
}