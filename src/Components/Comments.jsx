import React, {useEffect, useState} from "react";
import { fetchComments } from "../../utils";
import moment from "moment";


function Comments({article_id}) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchComments(article_id)
        .then(({comments}) => {
            if(comments.length === 0) {
            setComments('No comments available');
            setIsLoading(false);
            } else {
                setComments(comments)
                setIsLoading(false)
            }
        })
    }, []);

    if (isLoading) {
        return (
            <p className="loading-state">Loading...</p>
        )
    } else {
        return (
            <>
            <h3>Comments:</h3>
        <ul>
                {comments.map(({ comment_id, author, body, votes, created_at }) => {
                    return <li key={ comment_id }>
                    <br></br>
                    <p>{ body }</p>
                    <p>Votes: {votes}</p>
                    <small>By: {author} | Posted on: {moment(`${created_at}`).format("Do MMMM YYYY")}{" "}</small>
                    </li>
                })}
            </ul>
            </>
    )}
}

export default Comments;