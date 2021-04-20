import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

const LoginSignUp = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={12} md={6}>
          <LoginForm />
        </Col>
        <Col xs={12} md={6}>
          <SignupForm />
        </Col>
      </Row>
    </Fragment>
  );
};

export default LoginSignUp;
