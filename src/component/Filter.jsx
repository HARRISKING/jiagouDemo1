import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';

class Filter extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  // 获取数据
  getFieldsValues() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={4} key={i} >
          <Form.Item label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {

    const { getFieldDecorator } = this.props.form;
    console.log('getFieldDecorator', getFieldDecorator)

    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>{this.getFieldsValues()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'advanced_search' })(Filter);
export default WrappedNormalLoginForm