import React, { Fragment, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  emailSignInAsync,
  googleSignInAsync,
} from "../../redux/user/user.actions";

const LoginForm = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Fragment>
      <Container className="mt-5">
        <h1>I already have an account</h1>
        <span className="text-muted">Sign in with your email and password</span>
        <br />
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={email}
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={password}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button className="mr-3" variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={googleSignInStart} variant="dark" type="button">
            Sign in with Google
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInAsync()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInAsync({ email, password })),
});

export default connect(null, mapDispatchToProps)(LoginForm);
