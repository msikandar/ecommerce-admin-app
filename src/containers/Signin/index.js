import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/index";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input/index";
import {
  isLoggedin,
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../helpers/axios";
import { Redirect } from "react-router-dom";

const Signin = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer);

  useEffect(() => {
    dispatch(isLoggedin());
  }, []);

  async function userLogin(e) {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginRequest(user));
    const response = await axiosInstance
      .post("admin/signin", { ...user })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailure(err.response.data));
      });
    if (response) {
      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess(user, token));
      }
    }
  }
  if (state.authenticate) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <Layout>
          <Container style={{ marginTop: 100 }}>
            <Row style={{ marginTop: "50px" }}>
              <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={userLogin}>
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
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
};

export default Signin;
