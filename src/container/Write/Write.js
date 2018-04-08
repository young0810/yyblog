import React, { Component } from "react";
import { Upload, Input, Button, Icon, Form } from "antd";
import axios from "axios";
import { connect } from "react-redux";

import WriteForm from "../../component/WriteForm/WriteForm";
import { writing } from "../../redux/writeReducer";
import "./write.less";
import Preview from "./Preview";

@connect(state => state.writeReducer, { writing })
class Write extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onContentChange(content) {
    // this.setState({ content: content });
  }

  _onSubmit() {
    axios
      .post("/api/article", {
        title: this.props.title,
        tag: this.props.tag,
        content: this.props.content
      })
      .then(res => {
        console.log(res);
      });
  }

  _onChange(props, values) {
    for (let key in values) {
      this.props.writing({ [key]: values[key].value });
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log("write render");
    const WrappedForm = Form.create({
      onFieldsChange: this._onChange
    })(WriteForm);

    return (
      <div className="write-page">
        <div className="main-pane">
          <WrappedForm className="form-item" />
          <Preview className="preview-item" />
        </div>
        <Button
          type="primary"
          onClick={this._onSubmit}
          style={{ width: "200px", alignSelf: "center" }}
        >
          提交
        </Button>
      </div>
    );
  }
}

export default Write;
