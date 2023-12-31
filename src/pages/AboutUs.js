// AboutUs.js

import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="container-xxl abt-intro-bg mb-5">
        <div
          className="row justify-content-center align-items-center text-white"
          style={{ height: "100vh", verticalAlign: "middle" }}
        >
          <div className="col-md-6 text-center d-block">

            <h1 className="display-1 text-nowrap">About ShopVita</h1>
            <p className="lead fst-italic">
              Don't wait until you've reached your goal to be proud of yourself.
              Be proud of every step you take toward reaching that goal.
            </p>
          </div>
        </div>
      </div>

      <div className="container-xxl" style={{ marginTop: "100px" }}>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center d-block bg-image">
            
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

      <div className="container-xl text-center" style={{ margin: "50px auto" }}>
        <p className="lead text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi
          autem neque, corrupti velit obcaecati nam! Nulla delectus, quaerat,
          voluptatum obcaecati eum quam, fugiat aliquid aspernatur consectetur
          accusantium illum non.
        </p>
        <p className="lead text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi
          autem neque, corrupti velit obcaecati nam! Nulla delectus, quaerat,
          voluptatum obcaecati eum quam, fugiat aliquid aspernatur consectetur
          accusantium illum non, voluptatum obcaecati eum quam, fugiat aliquid
          aspernatur consectetur accusantium illum non.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
