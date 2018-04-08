import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Card } from "antd";
import { fetchArticleList } from "../../redux/articleReducer";

import "./home.less";

@connect(state => state.articleReducer, { fetchArticleList })
class Home extends Component {
  constructor(props) {
    super(props);
    this._viewArticle = this._viewArticle.bind(this);
  }

  componentWillMount() {
    this.props.fetchArticleList();
  }

  _viewArticle(id) {
    this.props.history.push("/article/" + id, { id });
  }

  render() {
    return (
      <div className="home-page">
        <List
          className="article-list"
          dataSource={this.props.articles}
          renderItem={item => (
            <List.Item className="list-item">
              <Card
                className="card-item"
                title={item.title}
                hoverable={true}
                onClick={() => {
                  this._viewArticle(item._id);
                }}
              >
                {item.content}
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Home;
