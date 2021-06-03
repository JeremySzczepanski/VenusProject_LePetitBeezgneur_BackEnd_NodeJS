import { connect } from '../Connections/lepetitbeezgneur_db';

export class Commande
{
    Id_Commande: number;
    DateCommnande: Date;
    Montant: number;
    Commande_Honoree: boolean;
    Id_Client: number;

    constructor(data: any)
    {
        this.Id_Commande = data.Id_Commande;
        this.DateCommnande = data.DateCommnande;
        this.Montant = data.Montant;
        this.Commande_Honoree = data.Commande_Honoree;
        this.Id_Client = data.Id_Client;
    }
}

export class CommandeModel
{
    public static async getAll()
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT Id_Commande, DateCommnande, Montant, Commande_Honoree, Id_Client FROM commande').then((results) =>
            {
                return results;
            });
        });
    }

    public static async getOneByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT Id_Commande, DateCommnande, Montant, Commande_Honoree, Id_Client FROM commande WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }


    public static async insertCommande(commande: Commande)
    {
        return connect().then((conn) => 
        {
            return conn.query('INSERT INTO commande (Id_Commande, DateCommnande, Montant, Commande_Honoree, Id_Client ) VALUES(? ,? ,? ,? ,?)', 
            [commande.Id_Commande, commande.DateCommnande, commande.Montant, commande.Commande_Honoree, commande.Id_Client]).then((results) => 
            {
                return this.getAll();
            });
        });
    }



}