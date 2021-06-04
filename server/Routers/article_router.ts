import { Router } from 'express';
import { ArticleController } from '../Controllers/article_controller';


export class ArticleRouter
{
    public router: Router;

    constructor()
    {
        this.router = Router();

        this.router.get('/', ArticleController.getAll);
        this.router.get('/id/:id', ArticleController.getOneByID);
        this.router.post('/create', ArticleController.createArticle);
        //this.router.delete('/:id', ArticleController.deleteArticle);
        //this.router.put('/:id', ArticleController.updateArticleByID);
        
        //this.router.get('/name/:name', ArticleController.getOneByName);
    }
    
}