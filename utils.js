import axios from "axios";

const articlesApi = axios.create({
    baseURL: 'https://nc-news-x3yb.onrender.com/api'
});

function fetchArticles() {
    return articlesApi
    .get('/articles')
    .then((res) => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

function fetchArticleById(article_id) {
    return articlesApi
    .get(`/articles/${article_id}`)
    .then((res) => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

function fetchComments(article_id) {
    return articlesApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

function plusVotesArticle(article_id) {
    const incVote = {inc_votes: +1}
    return articlesApi
    .patch(`/articles/${article_id}`, incVote)
    .then(({data}) => data)
    .catch(err => {
        console.log(err)
    });
}

function minusVotesArticle(article_id) {
    const incVote = {inc_votes: -1}
    return articlesApi
    .patch(`/articles/${article_id}`, incVote)
    .then(({data}) => data)
    .catch(err => {
        console.log(err);
    });
}

function postComment(article_id, commentData) {
    return articlesApi
    .post(`/articles/${article_id}/comments`, commentData)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        console.log(err);
    });
}



export {
    fetchArticles,
    fetchArticleById,
    fetchComments,
    plusVotesArticle,
    minusVotesArticle,
    postComment
}