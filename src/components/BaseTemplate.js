// src/components/BaseTemplate.js
import React from 'react';

function BaseTemplate({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the head content, including CSS and fonts */}
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
