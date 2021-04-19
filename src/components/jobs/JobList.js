import React, { Fragment } from "react";
import { connect } from "react-redux";

import Job from "./Job";
import Spinner from "../Spinner";

const JobList = ({ jobs, loading, error }) => {
  return (
    <Fragment>
      <div className="mt-5">
        {loading && <Spinner />}
        {error && <h1>Error. Try Refreshing.</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ jobs: { jobs, loading, error } }) => ({
  jobs,
  loading,
  error,
});

export default connect(mapStateToProps)(JobList);
