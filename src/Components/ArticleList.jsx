import React, { useEffect, useState } from "react";
import { fetchArticles } from '../../utils'
import { Link } from 'react-router-dom';


function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArticles().then(({articles}) => {
            setArticles(articles);
            setIsLoading(false);
        })
    }, []);

    //Loading State
    if (isLoading) {
        return (
            <p className="loading-state">Loading...</p>
        )
    }


    //Rendering State
    return (
        <main className="articles-page">
            <h2>Available Articles</h2>
            <ul>
                {articles.map(({ article_id, title, body, article_img_url }) => {
                    return <li key={ article_id }><Link to={ `/articleById/${ article_id }` }>{ title }</Link>
                    <br></br>
                    <img src={ article_img_url } alt={title} className="article-image"></img>
                    <p>{ body }</p>
                    </li>
                })}
            </ul>
        </main>
    )
}

export default ArticleList;