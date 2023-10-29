import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="navbar">
      <div className="container-xl">
        <a href="/" className="navbar-brand">
          <h1 className="logo">ShopVita</h1>
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <FontAwesomeIcon icon={faBars} /> {/* Add FontAwesome icon */}
        </button>
        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul className="navbar-nav ml-auto"> {/* Use ml-auto class to align items right */}
            <li className="nav-item">
              <a href="/" className="nav-link text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/shops" className="nav-link text-white">
                Shops
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link text-white">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link text-white">
                Contact
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
