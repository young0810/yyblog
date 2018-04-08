import axios from "axios";

const GET_ARTICLE_LIST = "get_artical_list";
const GET_ARTICLE = "get_article";

const initialState = {
  articles: [],
  article: {}
};

export function articleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      return { ...state, articles: action.payload };
    case GET_ARTICLE:
      return { ...state, article: action.payload };
    default:
      return state;
  }
}

function getArticleList(articles) {
  return {
    type: GET_ARTICLE_LIST,
    payload: articles
  };
}

function getArticle(article) {
  return {
    type: GET_ARTICLE,
    payload: article
  };
}

export function fetchArticleList() {
  return dispatch => {
    return axios.get("/api/article").then(res => {
      if (res.status === 200) {
        dispatch(getArticleList(res.data));
      }
    });
  };
}

export function fetchArticle(id) {
  return dispatch => {
    return axios.get("/api/article/" + id).then(res => {
      if (res.status === 200) {
        dispatch(getArticle(res.data));
      }
    });
  };
}
