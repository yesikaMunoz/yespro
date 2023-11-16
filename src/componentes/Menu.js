import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >

        <li className="nav-item">
          <a href="../widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              peticiones
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li>



      
    
       
        <li className="nav-item">
          <Link to={"#"} className="nav-link">
            <i className="nav-icon far fa-circle text-info" />
            <p>crear Tickets</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
