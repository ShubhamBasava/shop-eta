import React from 'react';

const Header = () => {
  return (
    <header className="navbar">
      <div className="container-xl">
        <a href="/" className="navbar-brand">
          <h1 className="logo">ShopVita</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          {/* Add your navigation links here */
            
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
