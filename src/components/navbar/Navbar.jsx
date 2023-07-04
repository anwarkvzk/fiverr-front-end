import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Link to='/'> */}
          {/* </Link> */}
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <hr />
      <div className="menu">
        <span>Test</span>
        <span>Test1</span>
      </div>
    </div>
  );
}

export default Navbar;
