import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'

export const Navbar = () => {

  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-mobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)} >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/user">User account</Link>
              </li>
              <li>
                <Link to="/vendor">Vendor account</Link>
              </li>
              <li>
                <Link to="/track">Track order</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fa fa-times close home-btn" ></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
