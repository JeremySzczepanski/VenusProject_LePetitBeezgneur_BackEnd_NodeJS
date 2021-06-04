import { Router, Request, Response, NextFunction } from 'express';
import { Article, ArticleModel } from '../Models/article_model';

export namespace ArticleController
{

    export async function getAll(req: Request, res: Response, next: NextFunction)
    {
        const results = await ArticleModel.getAll();
        res.json(results);
    }


    export async function getOneByID(req: Request, res: Response, next: NextFunction)
    {
        try
        {
            const results = await ArticleModel.getOneByID(req.params.id);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    
    export async function createArticle (req: Request, res: Response, next: NextFunction)
    {
        try
        {
            console.log(req.body);
            const article = new Article(req.body);
            const results = await ArticleModel.insertArticle(article);
            res.json(results);
        } catch(err)
        {
            res.status(500).send(err);
        }
    }

    

}