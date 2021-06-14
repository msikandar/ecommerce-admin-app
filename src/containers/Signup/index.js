import React, { useEffect } from "react";
import Layout from "../../components/Layout/index";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input/index";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoggedin } from "../../actions/auth.action";

function Signup(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer);
  useEffect(() => {
    dispatch(isLoggedin());
  }, []);

  console.log(state);
  if (state.authenticate) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Layout>
        <Container style={{ marginTop: 100 }}>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col>
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="First Name"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                  <Col>
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="Last Name"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
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

export default Signup;
