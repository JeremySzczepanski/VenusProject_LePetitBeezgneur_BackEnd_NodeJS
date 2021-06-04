import { connect } from '../Connections/lepetitbeezgneur_db';

export class Terrain
{
    Id_Commande: number;
    Id_terrain: number;
    date_reservation: Date;
    start_at: Date;
    end_at: Date;

    constructor(data: any)
    {
        this.Id_Commande = data.Id_Commande;
        this.Id_terrain = data.Id_terrain;
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

    
}