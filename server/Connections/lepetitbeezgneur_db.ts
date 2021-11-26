import * as mysql from 'mariadb'

export function connect()
{
    return mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'venus7_lepetitbeezgneur'
        });
}