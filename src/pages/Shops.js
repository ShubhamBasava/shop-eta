import React from "react";

const Shops = () => {
  return (
    <div>
      <div className="container-xxl shop-bg mb-3">
        <div
          className="row justify-content-center align-items-center text-white"
          style={{ height: "100vh", verticalAlign: "middle" }}
        >
          <div className="col-md-6 text-center d-block">
            <h1 className="display-1 text-nowrap">Shops</h1>
            <p className="lead fst-italic">
              Welcome to the Shops page. Here, you can explore various shops.
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-1 text-center d-block"></div>
        <div className="col-md-4 text-center text-white">
          <h2>Shop List</h2>
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
  );
};

export default Shops;
