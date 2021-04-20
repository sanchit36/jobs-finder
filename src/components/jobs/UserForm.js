import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { setFormData } from "../../redux/form/form.actions";

const UserForm = ({ setFormData }) => {
  // handle The form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [letter, setLetter] = useState("");
  const [file, setFile] = useState("");

  // give access to history object of react-router
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name, email, letter, file });
    setName("");
    setEmail("");
    setLetter("");
    setFile("");
    history.push("/success");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="letter">
          <Form.Label>Cover Letter Note</Form.Label>
          <Form.Control
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            as="textarea"
            rows={3}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.File onChange={(e) => setFile(e.target.value)} label="Resume" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFormData: (data) => dispatch(setFormData(data)),
});

export default connect(null, mapDispatchToProps)(UserForm);
