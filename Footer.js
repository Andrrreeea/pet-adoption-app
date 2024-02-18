import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-column">
          <h4>COLUMN</h4>
          <ul className="list">
            <li>stuff</li>
            <li>stuff</li>
            <li>stuff</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>COLUMN</h4>
          <ul className="list">
            <li>stuff</li>
            <li>stuff</li>
            <li>stuff</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>WELL ANOTHER COLUMN</h4>
          <ul className="list">
            <li>stuff</li>
            <li>stuff</li>
            <li>stuff</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>&copy;{new Date().getFullYear()} FOOTER | All rights reserved | Terms Of Service | Privacy</p>
    </div>
  );
}

export default Footer;
