import React from "react";
import "../Nav/Nav.css";

function Nav(props) {
  const updateCurrentTabTo = (tab, title) => {
    this.setState({ currentTab: tab, currentTitle: title });
  };
  return (
    <>
      {" "}
      <div className="nav">
        <a className="nav">Home</a>
        <div
          className="clickablelogo"
          onClick={() => {
            props.updateCurrentTabTo(1);
          }}
        ></div>

        <a className="nav">Men's</a>
        <a className="nav">Women's</a>
        <a className="nav">About Us</a>
        <a className="nav">Locations</a>
      </div>
    </>
  );
}
export default Nav;
