import * as express from 'express';
import * as cors from 'cors';
import * as https from 'https';

export class Server 
{
    private app: express.Application;
    //private httpsServer: https.Server;

    constructor()
    {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
    }

    public start()
    {
        this.app.listen(8000);
    }
}