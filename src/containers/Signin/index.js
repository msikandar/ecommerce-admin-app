import React from "react";
import Layout from "../../components/Layout/index";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input/index";

function Signin(props) {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter email"
                  value=""
                  onChange={() => {}}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value=""
                  onChange={() => {}}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Signin;
