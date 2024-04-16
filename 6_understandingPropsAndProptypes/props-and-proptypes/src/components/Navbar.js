import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div className="mynav">
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: props.bgcolor,
          border: "2px solid black",
          marginTop: "50px",
          borderRadius: "20px"
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  bgcolor: PropTypes.string
};

Navbar.defaultProps = {
  title: "Set Title Here",
  bgcolor: "Set BG Color"
};
