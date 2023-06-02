import React, { useEffect, useState } from "react";
import { fetchArticleById, plusVotesArticle, minusVotesArticle, postComment } from "../../utils";
import { useParams } from "react-router-dom";
import Comments from "./Comments";



    function ArticleById({user}) {
        const [article, setArticle] = useState([])
        const [isLoading, setIsLoading] = useState(true);
        const {article_id} = useParams();
        const [clicked, setClicked] = useState(false);
        const [formData, setFormData] = useState({
            username: user.username,
            body: ""
        });
        const [submitting, setSubmitting] = useState(false);

     useEffect(() => {
            fetchArticleById(article_id)
            .then(({article}) => {
                setArticle(article);
                setIsLoading(false);
         })
    }, [article_id]);

    function handlePlusVotes() {
        setArticle((article) => {
            return {...article, votes: article.votes + 1}
        })
        plusVotesArticle(article_id)
        .then(() => {
            setClicked(true);
            return {...article, votes: article.votes - 1}
        })
        .catch((err) => {
            console.error(err);
            })
    }

    function handleMinusVotes() {
        setArticle((article) => {
            return {...article, votes: article.votes - 1}
        })
        minusVotesArticle(article_id)
        .then(() => {
            setClicked(true);
            return {...article, votes: article.votes + 1}
        })
        .catch((err) => {
            if(err) {
                return <p>Error</p>
            }
        })
    }

    function handleChange(event) {
        event.preventDefault();
        setFormData({...formData, body: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
        if(!formData.username || !formData.body) {
            return "Error";
        }
        setSubmitting(true);
        postComment(article_id, formData)
            .then((res) => {
                console.log("Comment posted successfully");
                setFormData({
                    username: "",
                    body: ""
                });
        })
        .catch((err) => {
            console.error("Error posting comment:", err);
        })
        .finally(() => {
            setSubmitting(false);
        });
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
            <h2 className="vote-buttons">Thoughts?</h2>
            <br></br>
            <button onClick={() => {handlePlusVotes(article_id)}} disabled={clicked} className="plus-button"> + </button>
            <button onClick={() => {handleMinusVotes(article_id)}} disabled={clicked} className="minus-button"> - </button>
            <p className="article-votes">Votes: {article.votes}</p>
            </div>
            <small>{article.votes}</small>
            <form onSubmit={handleSubmit} className="formcomment-submit">
                <textarea
                    name="body"
                    placeholder="Your Comment"
                    value={formData.body}
                    onChange={handleChange}
                    required
                ></textarea>
                <br></br>
                <button type="submit" disabled={submitting} className="postcomment-submit">Submit</button>
            </form>
            <Comments article_id = {article_id} />
        </main>
    )
}


export default ArticleById;