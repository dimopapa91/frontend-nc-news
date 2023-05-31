import React, { useEffect, useState } from "react";
import { fetchArticlesById } from "../../utils";
import { useParams } from "react-router-dom";


function ArticlesById() {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();

    useEffect(() => {
        fetchArticlesById(article_id)
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
        </main>
    )
}


export default ArticlesById;