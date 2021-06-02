import { connect } from '../Connections/lepetitbeezgneur_db';

export class Terrain
{
    Id_Terrain: number;
    start_at: Date;
    end_at: Date;
    nom_terrain: string;
    Prix_heure: number;

    constructor(data: any)
    {
        this.Id_Terrain = data.Id_Terrain;
        this.start_at = data.start_at;
        this.end_at = data.end_at;
        this.nom_terrain = data.nom_terrain;
        this.Prix_heure = data.Prix_heure;
    }
}

export class TerrainModel
{
    public static async getAll()
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT Id_Terrain, start_at, end_at, nom_terrain, Prix_heure FROM terrain').then((results) =>
            {
                return results;
            });
        });
    }

    public static async insertTerrain(terrain: Terrain)
    {
        return connect().then((conn) => 
        {
            return conn.query('INSERT INTO terrain (Id_Terrain, start_at, end_at, nom_terrain, Prix_heure ) VALUES(? ,? ,? ,? ,?)', 
            [terrain.Id_Terrain, terrain.start_at, terrain.end_at, terrain.nom_terrain, terrain.Prix_heure]).then((results) => 
            {
                return this.getAll();
            });
        });
    }

}