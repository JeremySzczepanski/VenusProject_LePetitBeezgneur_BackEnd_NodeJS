import { connect } from '../Connections/lepetitbeezgneur_db';

export class User
{
    id_Users: number;
    is_verified:number;
    username: string;
    first_name: string;
    last_name: string;
    adresse_rue: string;
    adresse_nbr: string;
    adresse_cp: string;
    adresse_ville: string;
    email: string;
    admin: number;
    password: string;

    constructor(data: any)
    {
        this.id_Users = data.id_Users;
        this.is_verified = data.is_verified;
        this.username = data.username;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.adresse_rue = data.adresse_rue;
        this.adresse_nbr = data.adresse_nbr;
        this.adresse_cp = data.adresse_cp;
        this.adresse_ville = data.adresse_ville;
        this.email = data.email;
        this.admin = data.admin ? data.admin : 0;
        this.password = data.password;

    }
}

export class UserModel
{
    public static async getAll()
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT id_Users, is_verified, username, first_name, last_name, adresse_rue, adresse_nbr, adresse_cp, adresse_ville, email, admin, password FROM utilisateurs').then((results) => 
            {
                return results;
            });
        });
    }

    public static async getOneByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT id_Users, username, email, admin FROM utilisateurs WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }

    public static async getOneByName(name: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT id_Users, username, email FROM utilisateurs WHERE username=?', name).then((results) =>
            {
                return results;
            });
        });
    }

    public static async getOneByEmail(email: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT id_Users, username, email FROM utilisateurs WHERE email=?', email).then((results) =>
            {
                return results;
            });
        });
    }

    public static async insertUser(user: User)
    {
        return connect().then((conn) => 
        {
            return conn.query('INSERT INTO utilisateurs (username, first_name, last_name, adresse_rue, adresse_nbr, adresse_cp, adresse_ville, email, password ) VALUES(? ,? ,? ,? ,? ,? ,? ,? ,?)', 
            [user.username, user.first_name, user.last_name, user.adresse_rue, user.adresse_nbr, user.adresse_cp, user.adresse_ville, user.email, user.password]).then((results) => 
            {
                return this.getAll();
            });
        });
    }


    
    public static async deleteUserByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('DELETE FROM utilisateurs WHERE id_Users=?', id).then((results) => 
            {
                return this.getAll();
            });
        });
    }

    public static async updatePassword(user: User)
    {
        return connect().then((conn) => 
        {
            return conn.query('UPDATE utilisateurs SET password=? WHERE id=?', 
            [user.password, user.id_Users]).then((results) => 
            {
                return this.getOneByID(user.id_Users);
            });
        });
    }

    public static async updateUserByID(id: any, user: User)
    {
        return connect().then((conn) => 
        {
            return conn.query('UPDATE users SET username=?, email=?, admin=? WHERE id=?', 
            [user.username, user.email, user.admin, id]).then((results) => 
            {
                return this.getOneByID(id);
            });
        });
    }

    public static async checkPassword(username: string, password: string): Promise<any>
    {
        try
        {
            let res = await connect().then((conn) => 
            {
                return conn.query('SELECT id_Users, username, password, email, admin FROM utilisateurs WHERE username=?', username).then(
                    (results) =>
                    {
                        return results;
                    });
            });
    
            if(res[0].password === password)
            {
                return { success: true, admin: res[0].admin };
            }
        } catch(err)
        {
            console.error('[ERROR] checkPassword username : ' + username + ' password : ' + password);
            console.error(err);
        }
        return { success: false, admin: false };
    }

}