import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { fetchArticle } from "../../redux/articleReducer";
import marked, { Renderer } from "marked";
import hljs from "highlight.js";

import "highlight.js/styles/vs2015.css";
import "./article.less";

// Create your custom renderer.
const renderer = new Renderer();
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && hljs.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang ? hljs.highlight(language, code).value : code;
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

// Set the renderer to marked.
marked.setOptions({ renderer });

@connect(state => state.articleReducer, { fetchArticle })
class Article extends Component {
  componentWillMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  componentDidMount() {
    // const dom = ReactDOM.findDOMNode(this);
    hljs.initHighlighting();
  }

  render() {
    const article = this.props.article;
    return (
      <div className="article-page">
        <div className="main-container">
          <div>{article.title}</div>
          <div
            dangerouslySetInnerHTML={{ __html: marked(article.content || "") }}
          />
        </div>
      </div>
    );
  }
}

export default Article;
