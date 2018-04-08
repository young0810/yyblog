import React, { Component } from "react";
import { Input, Form } from "antd";

const FormItem = Form.Item;

class WriteForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 }
    };
    return (
      <Form {...this.props}>
        <FormItem label="标题" {...formItemLayout}>
          {getFieldDecorator("title", {
            // initialValue: this.props.title
          })(<Input />)}
        </FormItem>
        <FormItem label="标签" {...formItemLayout}>
          {getFieldDecorator("tag", {
            // initialValue: this.props.tag
          })(<Input />)}
        </FormItem>
        <FormItem label="内容" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
          {getFieldDecorator("content", {
            // initialValue: this.props.content
          })(<Input.TextArea autosize={{ minRows: 10, maxRows: 100 }} />)}
        </FormItem>
      </Form>
    );
  }
}
export default WriteForm;
