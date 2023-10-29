import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Import your existing CSS file
import "./styles.css"; // Import the new styles.css

// ... (the rest of your code)

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Header() {
  return (
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
  );
}

function Home() {
  return (
    <div >
      <h1 className="row justify-content-center align-items-center text-white">Home Page</h1>
      {/* Add your home page content here */}
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <section className="home-bg">
        <div className="container-xxl mb-5">
          <div
            className="row justify-content-center align-items-center text-white"
            style={{ height: "100vh", verticalAlign: "middle" }}
          >
            <div className="col-md-6 text-center d-block">
              <h1 className="display-1 text-nowrap">About ShopVita</h1>
              <p className="lead fst-italic">
                Don't wait until you've reached your goal to be proud of
                yourself. Be proud of every step you take toward reaching that
                goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-xxl" style={{ marginTop: "100px" }}>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center d-block img-shadow">
            <img
              src="src\static\assets\home.jpg"
              alt=""
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-md-4 text-center text-white">
            <h2>About ShopVita</h2>
            <p className="lead fst-italic mt-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              nisi autem neque, corrupti velit obcaecati nam! Nulla delectus,
              quaerat, voluptatum obcaecati eum quam, fugiat aliquid aspernatur
              consectetur accusantium illum non.
            </p>
            <p className="lead fst-italic text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              nisi autem neque, corrupti velit obcaecati nam! Nulla delectus,
              quaerat, voluptatum obcaecati eum quam, fugiat aliquid aspernatur
              consectetur accusantium illum non.
            </p>
          </div>
        </div>
      </div>

      <div className="container-xl text-center text-white" style={{ margin: "50px auto" }}>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi
          autem neque, corrupti velit obcaecati nam! Nulla delectus, quaerat,
          voluptatum obcaecati eum quam, fugiat aliquid aspernatur consectetur
          accusantium illum non.
        </p>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi
          autem neque, corrupti velit obcaecati nam! Nulla delectus, quaerat,
          voluptatum obcaecati eum quam, fugiat aliquid aspernatur consectetur
          accusantium illum non, voluptatum obcaecati eum quam, fugiat aliquid
          aspernatur consectetur accusantium illum non.
        </p>
      </div>
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <div className="container-xxl py-5 contact-bg">
        <div className="row justify-content-around m-0 text-white">
          <div className="col-md-4">
            <div className="card shadow px-4 py-5 text-dark">
              <form method="POST" id="contactForm" name="contactForm">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="fw-bold">Get In Touch</h2>
                    <p className="lead fs-6 fst-italic">
                      We love all Questions & Feedback. Please leave us a
                      message by filling the below form.{" "}
                    </p>
                  </div>
                  <div className="divider div-transparent div-arrow-down mt-3 mb-5"></div>
                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name"
                        name="name"
                      />
                      <label htmlFor="floatingInput">Full Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Subject"
                        name="subject"
                      />
                      <label htmlFor="floatingInput">Subject</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="8"
                        placeholder="Your Message..."
                        name1="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-dark"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-md-4 card card-columns px-4 py-5 shadow"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          >
            <div className="mt-3">
              <div className="my-3">
                <p className="fw-bold mb-0 fs-3">
                  <i className="bi bi-geo-fill pe-3" />
                  Postal Mail
                </p>
                <br />
                <p className="ms-4 ">
                  ShopVita Sales, INDIA, Inc.
                  <br />
                  P.O. Box 259001
                  <br />
                  Plano, TX 75025-9001
                </p>
              </div>
              <div className="my-3">
                <p className="fw-bold fs-3">
                  <i className="bi bi-telephone pe-3" />
                  Phone/Fax
                </p>
                <p className="ms-4 ">
                  Phone: 800-331-4331
                  <br />
                  Fax: 310-468-7814
                </p>
                <p className="ms-4 ">
                  Mon-Fri: 8:00 a.m. - 8:00 p.m. IST
                  <br />
                  Sat: 9:00 a.m. - 7:00 p.m. IST
                </p>
              </div>
              <div className="my-3">
                <p className="fw-bold mb-0 fs-3">
                  <i className="bi bi-envelope-fill pe-3" />
                  Send a Message
                </p>
                <p className="ms-4 ">contact@ShopVita.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
