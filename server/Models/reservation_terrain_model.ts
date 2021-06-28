import { connect } from '../Connections/lepetitbeezgneur_db';

export class ReservationTerrain
{
    Id_Commande: number;
    Id_Terrain: number;
    date_reservation: Date;
    start_at: Date;
    end_at: Date;

    constructor(data: any)
    {
        this.Id_Commande = data.Id_Commande;
        this.Id_Terrain = data.Id_terrain;
        this.date_reservation = data.date_reservation;
        this.start_at = data.start_at;
        this.end_at = data.end_at;
    }
}

export class ReservationTerrainModel
{
    public static async getAll()
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT Id_Commande, Id_terrain, date_reservation, start_at, end_at FROM  reserve_terrain').then((results) =>
            {
                return results;
            });
        });
    }

    public static async getOneByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT Id_Commande, Id_terrain, date_reservation, start_at, end_at FROM reserve_terrain WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }

    public static async insertReservationTerrain(reserve_terrain: ReservationTerrain)
    {
        return connect().then((conn) => 
        {
            return conn.query('INSERT INTO reserve_terrain (Id_Commande, Id_Terrain, date_reservation, start_at, end_at ) VALUES(? ,? ,? ,? ,?)', 
            [reserve_terrain.Id_Commande, reserve_terrain.Id_Terrain, reserve_terrain.date_reservation, reserve_terrain.start_at, reserve_terrain.end_at]).then((results) => 
            {
                return this.getAll();
            });
        });
    }
}