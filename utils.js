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


export {
    fetchArticles,
    fetchArticleById
}