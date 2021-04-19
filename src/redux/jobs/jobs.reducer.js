import JobsActionTypes from "./jobs.types";

const INITIAL_STATE = {
  jobs: [],
  job: {},
  error: undefined,
  loading: false,
  hasNextPage: undefined,
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JobsActionTypes.FETCH_JOBS_START:
    case JobsActionTypes.FETCH_JOB_START:
      return { ...state, loading: true };
    case JobsActionTypes.FETCH_JOB_SUCCESS:
      return { ...state, loading: false, job: action.payload };
    case JobsActionTypes.FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case JobsActionTypes.FETCH_JOBS_FAILURE:
    case JobsActionTypes.FETCH_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
        job: {},
      };
    case JobsActionTypes.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload };
    case JobsActionTypes.CLEAR_JOBS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default jobReducer;
