import React, { Fragment, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { signUpAsync } from "../../redux/user/user.actions";

const SignupForm = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Fragment>
      <Container className="mt-5">
        <h1>I do not have a account</h1>
        <span className="text-muted">Sign up with your email and password</span>
        <br />
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="displayName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={displayName}
              type="text"
              name="displayName"
              placeholder="Enter Display Name"
              required
            />
          </Form.Group>

          <Form.Group controlId="Email">
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

          <Form.Group controlId="Password">
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

          <Form.Group controlId="ConformPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpAsync(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignupForm);
