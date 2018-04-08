import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";
import { Route, Link, Switch, withRouter } from "react-router-dom";

import { selectTab } from "./redux/basicReducer";
import Home from "./container/Home/Home";
import Me from "./container/Me/Me";
import Write from "./container/Write/Write";
import NotFound from "./container/NotFound/NotFound";
import Lab from "./container/Lab/Lab";
import Article from "./container/Article/Article";

import "./App.less";

const { Header, Content } = Layout;
@connect(
  state => {
    console.log(state);
    return { selectedTab: state.basicReducer.selectedTab };
  },
  { selectTab }
)
class App extends Component {
  constructor(props) {
    super(props);
    this._onClickMenu = this._onClickMenu.bind(this);
  }

  _onClickMenu({ key }) {
    // this.props.selectTab(key);
  }

  render() {
    return (
      <Layout className="App">
        <Header style={{ position: "fixed", width: "100%" }}>
          <Menu
            mode="horizontal"
            theme="dark"
            defaultSelectedKeys={[location.pathname]}
            style={{ lineHeight: "64px" }}
            onClick={this._onClickMenu}
          >
            <Menu.Item key="/">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/me">
              <Link to="/me">个人</Link>
            </Menu.Item>
            <Menu.Item key="/lab">
              <Link to="/lab">实验室</Link>
            </Menu.Item>
            <Menu.Item key="/write">
              <Link to="/write">写写</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64, overflow: "auto" }}>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/me" component={Me} />
              <Route path="/lab" component={Lab} />
              <Route path="/write" component={Write} />
              <Route path="/article/:id" component={Article} />
              <Route path="/:404" component={NotFound} />
            </Switch>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);
