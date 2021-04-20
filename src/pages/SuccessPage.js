import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

const SuccessPage = ({ formData }) => {
  return (
    <Fragment>
      <Container className="mt-5">
        <h1>Thanks For Applying</h1>
        <br />
        <h4>Your Applications Details</h4>
        <hr />
        <p>
          <strong>Name: </strong> <span>{formData.name}</span>
        </p>
        <p>
          <strong>Email: </strong> <span>{formData.email}</span>
        </p>
        <p>
          <strong>Letter Note: </strong> <span>{formData.letter}</span>
        </p>
        <p>
          <strong>Resume: </strong> <span>{formData.file}</span>
        </p>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  formData: state.form,
});

export default connect(mapStateToProps)(SuccessPage);
