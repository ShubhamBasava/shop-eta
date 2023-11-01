import React, { useState, useEffect } from "react";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [shopId, setShopId] = useState("");
  const apiUrl = "http://localhost:8080/shops"; // Replace with your API endpoint

  useEffect(() => {
    // Fetch all shop data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setShops(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  const handleShopIdSubmit = (event) => {
    event.preventDefault();
    
    // Fetch data for a specific shop using shopId
    const shopApiUrl = `${apiUrl}/${shopId}`;
    
    fetch(shopApiUrl)
      .then((response) => response.json())
      .then((data) => setShops([data])) // Display only the selected shop
      .catch((error) => console.error("Error fetching shop data:", error));
  };

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
      <div className="container-xxl py-5 ">
        <div className="row justify-content-around m-0 text-white">
          <div className="col-md-4">
            <div className="card shadow px-4 py-5 text-dark">
              <form onSubmit={handleShopIdSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="fw-bold">To View Shops Details</h2>
                    <p className="lead fs-7 fst-italic  ">
                      Enter The <strong>Shop ID </strong>{" "}
                    </p>
                  </div>
                  <div className="divider div-transparent mt-3 mb-5"></div>
                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="shopId"
                        placeholder="Shop ID"
                        name="ShopID"
                        value={shopId}
                        onChange={(e) => setShopId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Get Shop Info"
                        className="btn btn-dark"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
    </div>
  );
};

export default Shops;
