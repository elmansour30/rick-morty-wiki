import React from "react";
import "../../App.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-4">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          <span className="text-white">Rick & Morty WiKi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx>
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }
              button[aria-expanded="true"] > .open {
                display: none;
            `}
          </style>
          <i class="fas fa-bars open fw-bold text-white"></i>
          <i class="fas fa-times close fw-bold text-white"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink
              activeClassName="active"
              to="/"
              className="nav-link text-white"
            >
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link text-white">
              Episodes
            </NavLink>
            <NavLink to="/location" className="nav-link text-white">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
