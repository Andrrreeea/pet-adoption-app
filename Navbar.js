import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Components/Navbar.css";
import logo from "../images/logo-no-background.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="fixed-header">
      <a className="logo-link">
      <img src={logo} alt="Logo" className="logo" />
      </a>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/MyAccount">My account</a>
        <a href="/ViewAnimals">View animals</a>
        <a href="/DonatePet">Donate pet</a>
        <a href="/AboutUs">About us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
