import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small text-light border-top" style={{ backgroundColor: 'rgba(0,0,0,.9)' }}>
      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright
        <button
          className="btn btn-link text-light"
          onClick={() => {
            // Handle the button click event, e.g., navigate to a different page or perform an action.
          }}
        >
          ShopVita.com
        </button>
      </div>
    </footer>
  );
};

export default Footer;
