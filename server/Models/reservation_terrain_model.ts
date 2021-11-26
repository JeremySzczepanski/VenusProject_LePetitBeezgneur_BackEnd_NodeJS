import { connect } from '../Connections/lepetitbeezgneur_db';
import { Commande } from '../Models/commande_model';

export class ReservationTerrain
{
    Id_Commande: number;
    Id_Terrain: number;
    date_reservation: Date;
    start_at: Date;
    end_at: Date;
    nom_terrain: string;
    Prix_heure: number;

    constructor(data: any) 
    {
        this.Id_Commande = data.Id_Commande;
        this.Id_Terrain = data.Id_terrain;
        this.date_reservation = data.date_reservation;
        this.start_at = data.start_at;
        this.end_at = data.end_at;
        this.nom_terrain = data.nom_terrain;
        this.Prix_heure = data.Prix_heure;
    }
}

export class ReservationTerrainModel
{

    
    public static async getAll()
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT Id_Commande, Id_Terrain, date_reservation, start_at, end_at FROM  reserve_terrain').then((results) =>
            {
                return results;
            });
        });
    }


    public static async getAllReservationTerrain()
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT Id_Commande, Id_Terrain, date_reservation, start_at, end_at FROM  reserve_terrain').then((results) =>
            {
                return results;
            });
        });
    }


    public static async getOneByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT Id_Commande, Id_Terrain, date_reservation, start_at, end_at FROM reserve_terrain WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }

    // public static async insertReservationTerrain(reserve_terrain: ReservationTerrain)
    // {
    //     return connect().then((conn) => 
    //     {
    //         return conn.query('INSERT INTO reserve_terrain (Id_Commande, Id_Terrain, date_reservation, start_at, end_at ) VALUES(? ,? ,? ,? ,?)', 
    //         [reserve_terrain.Id_Commande, reserve_terrain.Id_Terrain, reserve_terrain.date_reservation, reserve_terrain.start_at, reserve_terrain.end_at]).then((results) => 
    //         {
    //             return this.getAll();
    //         });
    //     });
    // }

    // //Creation de la commande en insertReservationTerrain étape 1
    // public static async insertReservationTerrain(reserve_terrain: ReservationTerrain)
    // {
    //     return connect().then((conn) =>
    //     {
    //         return conn.query('INSERT INTO commande (Id_Commande) VALUES(?)',
    //         [reserve_terrain.Id_Commande]).then((result) =>
    //         {
    //             return this.getAll();
    //         });
    //     });
    // }

    // //Creation de la commande en insertReservationTerrain étape 2
    // public static async insertReservationTerrain(reserve_terrain: ReservationTerrain)
    // {
    //     return connect().then((conn) =>
    //     {
    //         return conn.query('INSERT INTO commande (Id_Commande) VALUES(?)',
    //         [reserve_terrain.Id_Commande]).then((result) =>
    //         {
    //             let CommandeNbr = result.insertId
    //             console.log("Id_Commande inséré = " + result.insertId); //result.insertId récupére l'Id_commande

    //             //return this.getAll();

    //         });

    //     });
    // }

    //Creation de la commande en insertReservationTerrain étape 3
    public static async insertReservationTerrain(reserve_terrain: ReservationTerrain)
    {

        return connect().then((conn) =>
        {
            return conn.query('INSERT INTO commande (Id_Commande) VALUES(?)',['']).then((result) =>
            {
                let commandeNbr = result.insertId

                return conn.query('INSERT INTO reserve_terrain (Id_Commande, Id_Terrain, date_reservation, start_at, end_at ) VALUES(? ,? ,? ,? ,?)', 
                [result.insertId, reserve_terrain.Id_Terrain, reserve_terrain.date_reservation, reserve_terrain.start_at, reserve_terrain.end_at]).then((result) =>
                {
                
                
                    console.log("Id_Commande inséré = " + result.insertId); //result.insertId récupére l'Id_commande
                    return this.getAll();
                })
            });

        });
    }


}