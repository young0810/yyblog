import React, { Component } from "react";
import ReactMarkDown from "react-markdown";
import { connect } from "react-redux";

@connect(state => state.writeReducer)
class Preview extends Component {
  render() {
    return <ReactMarkDown source={this.props.content} {...this.props} />;
  }
}

export default Preview;
