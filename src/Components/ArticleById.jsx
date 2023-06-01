import React, { useEffect, useState } from "react";
import { fetchArticleById, plusVotesArticle, minusVotesArticle } from "../../utils";
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

    function handlePlusVotes() {
        setArticle((article) => {
            return {...article, votes: article.votes + 1}
        })
        plusVotesArticle(article_id)
        .then(() => {
            return {...article, votes: article.votes - 1}
        })
        .catch((err) => {
            if(err) {
                return <p>Error</p>
            }
        })
    }

    function handleMinusVotes() {
        setArticle((article) => {
            return {...article, votes: article.votes - 1}
        })
        minusVotesArticle(article_id)
        .then(() => {
            return {...article, votes: article.votes + 1}
        })
        .catch((err) => {
            if(err) {
                return <p>Error</p>
            }
        })
    }


    if (isLoading) {
        return (
            <p className="loading-state">Loading...</p>
        )
    }


    return (
        <main className="article-id">
            <h2 className="article-heading">Article</h2>
            <div className="article-details">
            <p className="article-title">{article.title}</p>
            <p className="article-topic">{article.topic}</p>
            <p className="article-author">{article.author}</p>
            <p className="article-body">{article.body}</p>
            <img 
                src={article.article_img_url} 
                alt={article.title} 
                className="article-img">
            </img>
            <h2 className="vote-buttons">Vote don't be shy</h2>
            <br></br>
            <button onClick={() => {handlePlusVotes(article_id)}} className="plus-button">+</button>
            <button onClick={() => {handleMinusVotes(article_id)}} className="minus-button">-</button>
            <p className="article-votes">Votes: {article.votes}</p>
            </div>
            <small>{article.votes}</small>
            <Comments article_id = {article_id} />
        </main>
    )
}


export default ArticleById;