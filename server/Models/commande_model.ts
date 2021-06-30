import { connect } from '../Connections/lepetitbeezgneur_db';

export class Commande
{
    Id_Commande: number;
    DateCommnande: Date;
    Montant: number;
    Commande_Honoree: boolean;
    Id_Users: number;
    Id_Terrain: number;
    start_at: Date;
    end_at: Date;
    nom_terrain: string;
    Prix_heure: number;

    constructor(data: any)
    {
        this.Id_Commande = data.Id_Commande;
        this.DateCommnande = data.DateCommnande;
        this.Montant = data.Montant;
        this.Commande_Honoree = data.Commande_Honoree;
        this.Id_Users = data.Id_Users;
        this.Id_Terrain = data.Id_Terrain;
        this.start_at = data.start_at;
        this.end_at = data.end_at;
        this.nom_terrain = data.nom_terrain;
        this.Prix_heure = data.Prix_heure;
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




    /**
     * 
     * @param commande 
     * @returns selectionne la commande en fonction de l'Id_Commande (Id_Commande, DateCommnande, Montant, Commande_Honoree, Id_Client)
     */

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


    // public static async insertCommande(commande: Commande)
    // {
    //     return connect().then((conn) => 
    //     {
    //         return conn.query('INSERT INTO commande (Id_Commande, DateCommnande, Montant, Commande_Honoree, Id_Client ) VALUES(? ,? ,? ,? ,?)', 
    //         [commande.Id_Commande, commande.DateCommnande, commande.Montant, commande.Commande_Honoree, commande.Id_Client]).then((results) => 
    //         {
    //             return this.getAll();
    //         });
    //     });
    // }



    

    /**
     * 
     * @param commande 
     * @returns create commande, et recupère la commande qui vient d'être insérée (Montant, Commande_Honoree, Id_Users)
     */

    public static async insertCommande(commande: Commande)
    {
        return connect().then((conn) =>
        {
            return conn.query('INSERT INTO commande ( Montant, Commande_Honoree, Id_Users ) VALUES(? ,? ,?)', 
            [commande.Montant, commande.Commande_Honoree, commande.Id_Users]).then((results) =>
            {
                console.log(results.insertId); //recupère l'id généré
                //console.log(results)


                //return results.insertId;
                return this.getOneByID(results.insertId); //recupère la commande qui vient d'être insérée
            })
        })
    }

}