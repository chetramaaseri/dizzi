import React from "react";
import "./Navbar.css";

function Navbar() {
  const config = {
    logo: "",
    navlinks: [
      {
        linkText: "Home",
        linkAddress: "#",
      },
      {
        linkText: "Home",
        linkAddress: "#",
      },
      {
        linkText: "Home",
        linkAddress: "#",
      },
      {
        linkText: "Home",
        linkAddress: "#",
      },
      
      {
        linkText: "Home",
        linkAddress: "#",
      }
    ],
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
      <div className="container">
        <span className="navbar-brand">
          Dizzibooster
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa-solid fa-bars-staggered"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-3 gap-lg-5">
            {config.navlinks.map((link,index) => {
              return (
                <li key={`navlink${index}`} className="nav-item">
                    {link.linkText}
                </li>
              );
            })}
          </ul>
          <button type="button" className="btn rounded-pill btn-primary">Lets Talk</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;