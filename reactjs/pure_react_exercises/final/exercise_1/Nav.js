import React from "react";
import "./Nav.css";


const Nav = ({onAction, activeTab}) => {
  return(
    <nav>
      <ul className="nav-links">
        <li onClick={(e) => onAction(0)} className={activeTab === 0 ? "active" : ""}>Items</li>
        <li onClick={(e) => onAction(1)} className={activeTab === 1 ? "active": ""}>Cart</li>
      </ul>
    </nav>
  );
}

export default Nav;