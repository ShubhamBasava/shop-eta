import React, { useState } from 'react';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <header className="navbar">
      <div className="container-xl">
        <a href="/" className="navbar-brand">
          <h1 className="logo">ShopVita</h1>
        </a>
        

        <div
          className="nav-link navbar-nav1 justify-content-end "
          id="main-nav"
        >
          <ul className="navbar-nav1 ml-auto navbar-item-pos ">
            {" "}
            {/* Use ml-auto class to align items right */}
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
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
