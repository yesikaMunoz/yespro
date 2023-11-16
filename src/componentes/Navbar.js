import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(

      <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to={"../../index3.html"} className="nav-link">Salir</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to={"#"} className="nav-link"></Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" data-widget="navbar-search" to={"#"} role="button">
          <i className="fas fa-search" />
        </Link>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" data-widget="fullscreen" to="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to={"#"} role="button">
          <i className="fas fa-th-large" />
        </Link>
      </li>
    </ul>
  </nav>
  </div>
  );




}
export default Navbar;