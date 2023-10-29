// src/components/BaseTemplate.js
import React from 'react';
import { Link } from 'react-router-dom';
function BaseTemplate({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the head content, including CSS and fonts */
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand , logo1">
            ShopVita
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/ShopDetails" className="nav-link">
                Shop Details
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        }
      </head>
      <body>
        {/* Navbar (Header) */}
        <nav className="navbar navbar-expand-md fw-bold">
          {/* Your header content here */}
        </nav>
        
        {/* Display error messages */}
        {/* Jinja content Block */}
        {children}
        {/* Jinja endblock */}
        
        {/* Footer */}
        <footer className="page-footer font-small text-light border-top" style={{ backgroundColor: 'rgba(0,0,0,.9)' }}>
          {/* Your footer content here */}
        </footer>

        {/* Bootstrap JS and custom JS */}
        {/* Linking JS to React */}
        <script type="text/javascript" src="index.js"></script>
      </body>
    </html>
  );
}

export default BaseTemplate;
