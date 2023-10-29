import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import BaseTemplate from './components/BaseTemplate';
import "./App.css"; // Import your existing CSS file
import "./styles.css"; // Import the new styles.css


// ... (the rest of your code)

function App() {
  return (
    <Router>
      
        <Route exact path="/">
          <BaseTemplate>
            <Header />
            <Home />
          </BaseTemplate>
        </Route>
        <Route path="/about">
          <BaseTemplate>
            <Header />
            <AboutUs />
          </BaseTemplate>
        </Route>
        <Route path="/contact">
          <BaseTemplate>
            <Header />
            <Contact />
          </BaseTemplate>
        </Route>
      
    </Router>
  );
}

export default App;
