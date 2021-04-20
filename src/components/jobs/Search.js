import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { clearJobs, fetchJobsAsync } from "../../redux/jobs/jobs.actions";
import { selectCurrentJobs } from "../../redux/jobs/jobs.selectors";

const Search = ({ jobs, fetchJobs, clearJobs }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    fetchJobs(text);
  };

  const onChange = (e) => setText(e.target.value);

  const showClear = () => (jobs.length ? true : false);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          className="form-control mb-3"
          placeholder="Enter a Language"
          value={text}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear() && (
        <button
          type="button"
          className="btn btn-light btn-block"
          onClick={clearJobs}
        >
          Clear
        </button>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  jobs: selectCurrentJobs,
});
const mapDispatchToProps = (dispatch) => ({
  fetchJobs: (text) => dispatch(fetchJobsAsync(text)),
  clearJobs: () => dispatch(clearJobs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
