import React from "react";
import { Form } from "react-bootstrap";

class Input extends React.Component {
  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          autoComplete="on"
        />
        <Form.Text className="text-muted">{this.props.error}</Form.Text>
      </Form.Group>
    );
  }
}

export default Input;
