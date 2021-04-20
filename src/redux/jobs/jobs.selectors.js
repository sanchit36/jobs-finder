import { createSelector } from "reselect";

const selectJobs = (state) => state.jobs;

export const selectCurrentJobs = createSelector(
  [selectJobs],
  (jobs) => jobs.jobs
);

export const selectCurrentJob = createSelector(
  [selectJobs],
  (jobs) => jobs.job
);

export const selectLoading = createSelector(
  [selectJobs],
  (jobs) => jobs.loading
);

export const selectError = createSelector([selectJobs], (jobs) => jobs.error);
