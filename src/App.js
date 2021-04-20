import React, { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect, Route, Switch } from "react-router";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDeatils from "./pages/JobDeatils";
import LoginSignUp from "./pages/LoginSignUp";
import SuccessPage from "./pages/SuccessPage";

import "./App.css";

/*NOTE
  proxy the base url with cors-anywhere deployed on my heroku account so loading can the more time
*/

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    // dispatch a action to check user in localStorage and set it to currentUser
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Fragment>
      <Navbar />
      <Container className="my-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <LoginSignUp />)}
          />
          <Route exact path="/success" component={SuccessPage} />
          <Route exact path="/jobs/:id" component={JobDeatils} />
        </Switch>
      </Container>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
