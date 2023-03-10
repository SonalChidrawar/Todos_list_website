import React from "react";
import propTypes from "prop-types";

// replace href = to & a = Link

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            
          </ul>

        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  //used when user did not pass any title to the parent component
  title: "Your title here",
  searchBar: true,
};

Header.propTypes = {
  title: propTypes.string,
  // numerical values also gets rendered but shows error in the console(inspect) and makes easy to debug and is robust
  searchBar: propTypes.bool,
  // searchBar: propTypes.bool.isRequired --> isrequired is used when it is mandatory for the user to enter the value of searchBar and searchBar is not set in defaultProps
};
