import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { signOutAsync } from "../redux/user/user.actions";
import { selectCurrentUser } from "../redux/user/user.selectors";

const Navbar = ({ currentUser, signOutStart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fab fa-github" /> Job Finder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {currentUser ? (
              <li className="nav-item active">
                <span
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                  onClick={signOutStart}
                >
                  logout
                </span>
              </li>
            ) : (
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Login/Signup
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
