import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const NavItem = ({children, url}) => {
  return(
    <a href={url}>{children}</a>
  );
};

NavItem.propTypes = {
  children: PropTypes.string,
  url: PropTypes.string
};

const Nav = ({children}) => {
  let links = React.Children.toArray(children);
  React.Children.forEach(links, function(element) {
    if(element.type.name !== "NavItem"){
      try{
        throw "Error: All nav links must be a NavItem";
      }
      catch (e) {
        console.log(e);
      }
    }
  })
  return(
    <nav>
      {children}
    </nav>
  );
};

Nav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
};


ReactDOM.render(
  <Nav>
    <NavItem url='/'>Home</NavItem>
    <NavItem url='/about'>About</NavItem>
    <a href='/contact'>Contact</a>
  </Nav>,
  document.getElementById("root")
);