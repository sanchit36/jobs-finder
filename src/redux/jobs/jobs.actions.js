import JobsActionTypes from "./jobs.types";
import axios from "axios";

/*
  proxy the base url with cors-anywhere deployed on my heroku account so loading can the more time
*/
const BASE_URL =
  "https://protected-cliffs-15886.herokuapp.com/https://jobs.github.com/positions.json";

const fetchJobStart = () => ({
  type: JobsActionTypes.FETCH_JOB_START,
});

const fetchJobSuccess = (job) => ({
  type: JobsActionTypes.FETCH_JOB_SUCCESS,
  payload: job,
});

const fetchJobFailure = (error) => ({
  type: JobsActionTypes.FETCH_JOB_FAILURE,
  payload: error,
});

const fetchJobsStart = () => ({
  type: JobsActionTypes.FETCH_JOBS_START,
});

const fetchJobsSuccess = (jobs) => ({
  type: JobsActionTypes.FETCH_JOBS_SUCCESS,
  payload: jobs,
});

const fetchJobsFailure = (error) => ({
  type: JobsActionTypes.FETCH_JOBS_FAILURE,
  payload: error,
});

const clearJobs = () => ({
  type: JobsActionTypes.CLEAR_JOBS,
});

const fetchJobAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchJobStart());
    axios
      .get(
        `https://protected-cliffs-15886.herokuapp.com/https://jobs.github.com/positions/${id}.json`,
        {
          params: { markdown: true },
        }
      )
      .then((res) => {
        dispatch(fetchJobSuccess(res.data));
      })
      .catch((e) => {
        dispatch(fetchJobFailure(e));
      });
  };
};

const fetchJobsAsync = (text) => {
  return (dispatch) => {
    dispatch(fetchJobsStart());
    axios
      .get(BASE_URL, {
        params: { markdown: true, description: text },
      })
      .then((res) => {
        dispatch(fetchJobsSuccess(res.data));
      })
      .catch((e) => {
        dispatch(fetchJobsFailure(e));
      });
  };
};

export {
  fetchJobsStart,
  fetchJobStart,
  fetchJobsSuccess,
  fetchJobSuccess,
  fetchJobsFailure,
  fetchJobFailure,
  clearJobs,
  fetchJobAsync,
  fetchJobsAsync,
};
