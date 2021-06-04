import { connect } from '../Connections/lepetitbeezgneur_db';

export class Article
{
    Id_Articles: number;
    titre: string;
    slug: string;
    contenu: string;
    created_at: Date;
    updated_at: Date;
    featured_image: ImageData;
    Id_employee: number;

    constructor(data: any)
    {
        this.Id_Articles = data.Id_Articles;
        this.titre = data.titre;
        this.slug = data.slug;
        this.contenu = data.contenu;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.featured_image = data.featured_image;
        this.Id_employee = data.Id_employee;
    }
}

export class ArticleModel
{
    public static async getAll()
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT Id_Articles, titre, slug, contenu, created_at, updated_at, featured_image, Id_employee FROM article').then((results) =>
            {
                return results;
            });
        });
    }

    public static async getOneByID(id: any)
    {
        return connect().then((conn) => 
        {
            return conn.query('SELECT Id_Articles, titre, slug, contenu, created_at, updated_at, featured_image, Id_employee FROM commande WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }


    public static async insertArticle(article: Article)
    {
        return connect().then((conn) => 
        {
            return conn.query('INSERT INTO commande (Id_Articles, titre, slug, contenu, created_at, updated_at, featured_image, Id_employee ) VALUES(? ,? ,? ,? ,? ,?, ?, ?)', 
            [article.Id_Articles, article.titre, article.slug, article.contenu, article.created_at, article.updated_at, article.featured_image, article.Id_employee ]).then((results) => 
            {
                return this.getAll();
            });
        });
    }





}