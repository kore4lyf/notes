import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";


const Title = ({children}) => {
  return(
    <div className="title">{children}</div>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired
}

const Body = ({children}) => {
  return(
    <div className="body">{children}</div>
  );
};

Body.propTypes = {
  children: PropTypes.string.isRequired
};

const Footer = ({children}) => {
  return(
    <button className="footer">{children}</button>
  );
};

Footer.propTypes = {
  children: PropTypes.string.isRequired
};

const Dialog = ({children}) => {
  return(
    <main className="dialog">
      {children}
    </main>
  );
};

Dialog.propTypes = {
  children: PropTypes.node
};

ReactDOM.render(
  <Dialog>
    <Title>This is important</Title>
    <Body>Here is an Important text</Body>
    <Footer>Close</Footer>
  </Dialog>,
  document.getElementById("root")
);