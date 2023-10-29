import React from "react";

const Footer = () => {
  // Define a function to handle the button click event
  const handleButtonClick = () => {
    // Use window.location to navigate to the root page
    window.location.href = "/";
  };

  return (
    <footer
      className="page-footer font-small text-light border-top"
      style={{ backgroundColor: "rgba(0,0,0,.9)" }}
    >
      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright{" "}
        <div>
          <button
            className="btn btn-link text-light"
            onClick={handleButtonClick} // Attach the click event handler
          >
            ShopVita.com
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
