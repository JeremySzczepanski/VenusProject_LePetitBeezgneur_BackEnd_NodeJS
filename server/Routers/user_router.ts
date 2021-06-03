import { Router } from 'express';
import { UserController } from '../Controllers/user_controller'

export class UserRouter
{
    public router: Router;

    constructor()
    {
        this.router = Router();

        this.router.get('/', UserController.getAll);
        this.router.get('/id/:id', UserController.getOneByID);
        //this.router.get('/name/:name', UserController.getOneByName);
        this.router.post('/create', UserController.createUser);
        this.router.delete('/:id', UserController.deleteUser);
        this.router.put('/:id', UserController.updateUserByID);



        // this.router.get('/id/:id', UserController.getOneByID);
        // this.router.get('/name/:name', UserController.getOneByName);
        // this.router.get('/email/:email', UserController.getOneByEmail);
        // this.router.post('/create', UserController.createUser);
        // this.router.get('/', UserController.getAll);
        // this.router.put('/:id', UserController.updateUserByID);
        // this.router.delete('/:id', UserController.deleteUser);
        

        
    }
}