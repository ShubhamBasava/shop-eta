import React, { useState, useEffect } from 'react';

const Shops = () => {
  const [shops, setShops] = useState([]);

  // Fetch shop data from your API or database
  useEffect(() => {
    // You can make an API call here to fetch shop data and set it in the state.
    // Example fetch call:
    fetch('/api/shops')
      .then((response) => response.json())
      .then((data) => setShops(data))
      .catch((error) => console.error('Error fetching shops', error));
  }, []);

  return (
    <div>
      <div className="container-xxl shop-bg mb-3">
        <div className="row justify-content-center align-items-center text-white" style={{ height: "100vh", verticalAlign: "middle" }}>
          <div className="col-md-6 text-center d-block">
            <h1 className="display-1 text-nowrap">Shops</h1>
            <p className="lead fst-italic">Welcome to the Shops page. Here, you can explore various shops.</p>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 ">
        {shops.map((shop) => (
          <div className="row justify-content-around m-0 text-white" key={shop.shopId}>
            <div className="col-md-4">
              <div className="card shadow px-4 py-5 text-dark">
                <h2 className="fw-bold">{shop.shopName}</h2>
                <p className="lead fs-6 fst-italic">
                  Category: {shop.shopCategory}<br />
                  Customers: {shop.customers}<br />
                  Shop Status: {shop.shopStatus}<br />
                  Lease Status: {shop.leaseStatus}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shops;
