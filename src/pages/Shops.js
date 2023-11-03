import React, { useState, useEffect } from "react";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [shopId, setShopId] = useState("");
  const [httpMethod, setHttpMethod] = useState("GET"); // Set "GET" as the default method
  const apiUrl = "http://localhost:8080/shops";

  useEffect(() => {
    // Fetch all shop data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setShops(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  const handleShopIdSubmit = (event) => {
    event.preventDefault();

    // Fetch data for a specific shop using shopId and httpMethod
    const shopApiUrl = `${apiUrl}/${shopId}?method=${httpMethod}`;

    fetch(shopApiUrl)
      .then((response) => response.json())
      .then((data) => setShops([data]))
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
      <div className="container-xxl py-5">
        <div className="row justify-content-around m-0 text-white">
          <div className="col-md-4">
            <div className="card shadow px-4 py-5 text-dark">
              <form onSubmit={handleShopIdSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="fw-bold">View Shops Details</h2>
                    <p className="lead fs-7 fst-italic">
                      Enter the <strong>Shop ID</strong> and select an HTTP method.
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
                    <div className="form-floating mb-3">
                      <select
                        className="form-select"
                        id="httpMethod"
                        name="HttpMethod"
                        value={httpMethod}
                        onChange={(e) => setHttpMethod(e.target.value)}
                      >
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                      </select>
                      <label htmlFor="httpMethod" className="text-dark">
                        &nbsp;Select HTTP Method
                      </label>
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
          <div className="col-md-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Shop ID</th>
                  <th>Shop Name</th>
                  <th>Category</th>
                  <th>Customers</th>
                  <th>Shop Status</th>
                  <th>Lease Status</th>
                </tr>
              </thead>
              <tbody>
                {shops.map((shop) => (
                  <tr key={shop.shopId}>
                    <td>{shop.shopId}</td>
                    <td>{shop.shopName}</td>
                    <td>{shop.shopCategory}</td>
                    <td>{shop.customers}</td>
                    <td>{shop.shopStatus}</td>
                    <td>{shop.leaseStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
