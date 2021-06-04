import * as express from 'express';
import * as cors from 'cors';
//import * as https from 'https';
import { TerrainRouter } from './Routers/terrain_router';
import { UserRouter } from './Routers/user_router';
import { CommandeRouter } from './Routers/commande_router';

export class Server 
{
    private app: express.Application;
    //private httpsServer: https.Server | undefined;

    
    constructor()
    {
        //create application
        this.app = express();
        this.app.use(cors());
        //body parser is now remplaced by 'express'
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        //routes
        
        this.app.use('/api/terrain', new TerrainRouter().router);
        this.app.use('/api/commande', new CommandeRouter().router);
        this.app.use('/api/users', new UserRouter().router);

    }

    private init_routes()
    {

    }

    public start()
    {
        this.app.listen(8000);
    }
}