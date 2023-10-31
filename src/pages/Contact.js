import React from "react";

const ImageBackground = ({ children, imageUrl }) => {
  const style = {
    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url('${imageUrl}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return <div style={style}>{children}</div>;
};

const ContactUs = () => {
  return (
    <div>
      <ImageBackground imageUrl="/static/assets/contact-bg.jpg">
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
      </ImageBackground>
    </div>
  );
};

export default ContactUs;
