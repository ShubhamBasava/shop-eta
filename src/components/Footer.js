import React from "react";

const Footer = () => {
  return (
    <footer
      className="page-footer font-small text-light border-top"
      style={{ backgroundColor: "rgba(0,0,0,.9)" }}
    >
      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright
        <a href="#"> ShopVita.com</a>
      </div>
    </footer>
  );
};

export default Footer;
