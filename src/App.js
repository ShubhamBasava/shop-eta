import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        {/* Your main content goes here */}
        <h2>Welcome to ShopVita</h2>
        {/* Add your content here */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
