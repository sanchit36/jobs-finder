import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDeatils from "./pages/JobDeatils";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container className="my-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs/:id" component={JobDeatils} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
