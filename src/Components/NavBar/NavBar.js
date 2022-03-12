import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../App.scss'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to='/' className="fs-3 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>

        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >


          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>

        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav fs-5">
            <NavLink  to='/' activeclassname="active" className="nav-link" aria-current="page">
              Characters
            </NavLink>

            <NavLink to='/episodes' className="nav-link">Episodes</NavLink>

            <NavLink  to='/locations' className="nav-link">Locations</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
