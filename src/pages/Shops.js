import React, { useState, useEffect } from "react";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const apiUrl = "http://localhost:8080/shops"; // Replace with your API endpoint

  useEffect(() => {
    // Fetch shop data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setShops(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  return (
    <div>
      <div className="container-xxl shop-bg mb-3 mb-5">
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

      <div className="row justify-content-around m-0 text-white">
        {shops.map((shop) => (
          <div className="col-md-4" key={shop.shopId}>
            <div className="card shadow px-4 py-5 text-dark">
              <h2 className="fw-bold">{shop.shopName}</h2>
              <p className="lead fs-6 fst-italic">
                Category: {shop.shopCategory}
              </p>
              <p className="lead fs-6 fst-italic">
                Customers: {shop.customers}
              </p>
              <p className="lead fs-6 fst-italic">
                Shop Status: {shop.shopStatus}
              </p>
              <p className="lead fs-6 fst-italic">
                Lease Status: {shop.leaseStatus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shops;
