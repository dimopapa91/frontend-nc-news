import React, { useEffect, useState } from "react";
import { fetchArticleById } from "../../utils";
import { useParams } from "react-router-dom";
import Comments from "./Comments";



function ArticleById() {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();

    useEffect(() => {
        fetchArticleById(article_id)
        .then(({article}) => {
            setArticle(article);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <p className="loading-state">Loading...</p>
        )
    }


    return (
        <main className="article-id">
            <h2 className="article-heading">Article</h2>
            <div className="article-details">
        <main classname="article-id">
            <h2>Article</h2>
            <p className="article-title">{article.title}</p>
            <p className="article-topic">{article.topic}</p>
            <p className="article-author">{article.author}</p>
            <p className="article-body">{article.body}</p>
            <img 
                src={article.article_img_url} 
                alt={article.title} 
                className="article-img">
            </img>
            <p className="article-votes">Votes: {article.votes}</p>
            </div>
            <Comments article_id = {article_id} />
            <img
                src={article.article_img_url}
                alt={article.title}
                className="article-img">
            </img>
            <p className="article-votes">Votes: {article.votes}</p>
        </main>
    )
}


export default ArticleById;