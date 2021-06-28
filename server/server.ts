import * as express from 'express';
import * as cors from 'cors';
import * as https from 'https';
import * as fs from 'fs';
import { TerrainRouter } from './Routers/terrain_router';
import { UserRouter } from './Routers/user_router';
import { CommandeRouter } from './Routers/commande_router';
import { AuthentificationRouter } from './Routers/authentification_router';
import { UserCommonRouter } from './Routers/user_common_router';
import { ReservationTerrainRouter } from './Routers/reservation_terrain_router';

export class Server 
{
    private app: express.Application;
    private httpsServer: https.Server //| undefined;

    
    constructor()
    {

        /* ***********************************************************************
        **    required :                                                        **
        **    npm install ts-node @types/express typescript cors jsonwebtoken   **
        **                                                                      **
        *********************************************************************** */

        //create application
        this.app = express();
        this.app.use(cors());
        //body parser is now remplaced by 'express'
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));



        //redirect to private init_route() where we stack all the routes
        this.init_routes();

        //** TODO VOIR NOTES PAPIER POUR COMMENTER */
        let key = fs.readFileSync('certificate/private.pem', 'utf8');
        let certif = fs.readFileSync('certificate/certificate.crt', 'utf8');
        let credentials = { key: key, cert: certif };
        this.httpsServer = https.createServer(credentials, this.app);
        
    }

    private init_routes()
    {
        this.app.use('/api/token', new AuthentificationRouter().router);

        // *** user common router (create and get by username)  ***
        this.app.use('/api/users-common', new UserCommonRouter().router);

        this.app.use(AuthentificationRouter.checkAuthorization); 
        // *** FROM HERE -> REQUIRE AUTHENTIFICATION ACCES ***

        this.app.use('/api/users-common', new UserCommonRouter().authRouter);
        this.app.use('/api/terrains', new TerrainRouter().router);
        this.app.use('/api/commande', new CommandeRouter().router);
        this.app.use('/api/reservation', new ReservationTerrainRouter().router);

        this.app.use(AuthentificationRouter.checkAdmin);
        // *** FROM HERE -> REQUIRE ADMIN PRIVILEGES ACCES ***
        this.app.use('/api/users', new UserRouter().router);
    }

    public start()
    {
        // run with http
        //this.app.listen(8000);

        // run with https
        this.httpsServer.listen(8000);
    }
}