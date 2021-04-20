import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { createStructuredSelector } from "reselect";
import Job from "../components/jobs/Job";
import Spinner from "../components/Spinner";
import { fetchJobAsync } from "../redux/jobs/jobs.actions";
import {
  selectCurrentJob,
  selectError,
  selectLoading,
} from "../redux/jobs/jobs.selectors";

const JobDeatils = ({ job, loading, error, fetchJob }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchJob(id);
  }, [id, fetchJob]);

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <h1>Error. Try Refreshing.</h1>;
  } else {
    return (
      <Fragment>
        <div className="mt-5">
          <Job job={job} details />
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  job: selectCurrentJob,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJob: (id) => dispatch(fetchJobAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDeatils);
