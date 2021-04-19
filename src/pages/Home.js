import React, { Fragment } from "react";
import JobList from "../components/jobs/JobList";
import Search from "../components/jobs/Search";

const Home = () => {
  return (
    <Fragment>
      <h1 className="mb-4">GitHub Jobs</h1>
      <Search />
      <JobList />
    </Fragment>
  );
};

export default Home;
