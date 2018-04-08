import React, { Component } from "react";
import { Form } from "antd";
import { connect } from "react-redux";

import WriteForm from "../../component/WriteForm/WriteForm";
import { writeReducer, writing } from "../../redux/writeReducer";

@connect(state => writeReducer, { writing })
class WrappedForm extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    console.log("changing");
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const WrappedForm = Form.create({
      onFieldsChange: this._onChange
    })(WriteForm);
    return <WrappedForm {...this.props} />;
  }
}

export default WrappedForm;
