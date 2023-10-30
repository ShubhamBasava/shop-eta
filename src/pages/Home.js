import React from "react";
const Home = () => {
  return (
    <>
      <section id="intro" className="text-white home-bg1">
        <div className="container-lg Home-BG">
          <div
            className="row justify-content-center align-items-center"
            style={{ height: "80vh" }}
          >
            <div className="col-md-10 text-center text-md-left">
            <h1 className="display-1 text-nowrap">Welcome To ShopVita</h1>
              <h1
                className="display-4 lh-1 fw-bold text-uppercase m-0"
                style={{ letterSpacing: "0px" }}
              >
                <p className="text-nowrap ">IT'S ALL ABOUT WHAT YOU</p>
                <p className="text-nowrap">CAN ACHIEVE</p>
              </h1>
              <p className="my-1 fs-6 text-nowrap" style={{ width: "70%" }}>
                <small>
                  Empower yourself to make the changes you need to make
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="new_releases" className="bg-light">
        <div className="container-lg">
          <div className="text-center my-5">
            <h1 className="display-4 fw-bold">New Releases</h1>
            <p className="lead fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati repudiandae voluptates officia dolores, ullam sunt.
            </p>
          </div>
          <div className="row justify-content-center align-items-center my-5">
            <div className="col-md-5">
              <div
                className="card shadow text-left"
                style={{ margin: "auto", width: "90%" }}
              >
                <img
                  src="/static/assets/New/t-shirt2.jpg"
                  className="card-img-top"
                  alt="T-Shirt"
                />
                <div className="card-body px-4 ">
                  <h4 className="card-title fw-bold text-uppercase m-0">
                    ShopVita Men's Slim Fit T-Shirt
                  </h4>
                  <p className="display-6 mt-1 mb-4">₹300</p>
                  <p className="card-text mb-1">
                    Wash in normal water, dry inside out, do not iron on print &
                    label.
                  </p>
                  <p className="card-text mb-1">Fit Type: Slim Fit.</p>
                  <p className="card-text mb-1">
                    Fabric: Lycra; Style: Regular.
                  </p>
                  <p className="card-text mb-1">Sleeve Type: Long Sleeve.</p>
                  <p className="card-text mb-1">Material Type: Spandex.</p>
                  <button
                    className="col-6 btn btn-lg btn-dark float-right mt-5"
                    type="submit"
                    name="shopVitaTShirt"
                  >
                    <a href="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="card shadow text-left"
                style={{ margin: "auto", width: "90%" }}
              >
                <img
                  src="src\static\assets\New\t-shirt1.jpg"
                  className="card-img-top"
                  alt="T-Shirt"
                  style={{ objectPosition: "top" }}
                />
                <div className="card-body px-4">
                  <h4 className="card-title fw-bold text-uppercase m-0">
                    ShopVita Premium T-Shirt
                  </h4>
                  <p className="display-6 mt-1 mb-4">₹689</p>
                  <p className="card-text mb-1">Fit Type: Slim Fit</p>
                  <p className="card-text mb-1">
                    Wash Care: Wash In Normal Water, Dry Inside Out, Do Not Iron
                    On Print & Label.
                  </p>
                  <p className="card-text mb-1">Fit Type: Slim Fit.</p>
                  <p className="card-text mb-1">Sleeve Type: Long Sleeve.</p>
                  <p className="card-text mb-1">Fabric Type: Synthetic.</p>
                  <button
                    className="col-6 btn btn-lg btn-dark float-right mt-5"
                    type="submit"
                    name="shopVitaPremiumTShirt"
                  >
                    <a href="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="classics" className="bg-light">
        <div className="container-lg">
          <div className="text-center my-5">
            <h1 className="display-4 fw-bold">Protein Powder</h1>
            <p className="lead fst-italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, illum.
            </p>
          </div>
          <div className="row justify-content-center align-items-center my-5">
            <div className="col-md-5">
              <div
                className="card shadow text-left"
                style={{ margin: "auto", width: "90%" }}
              >
                <img
                  src="/static/assets/Classic/Protein-Podwde-2.jpg"
                  className="card-img-top"
                  alt="Protein Powder"
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold text-uppercase m-0">
                    ShopVita Creatine Monohydrate
                  </h4>
                  <p className="display-6 mt-1 mb-4">₹549</p>
                  <p className="card-text mb-1">Brand: ShopVita</p>
                  <p className="card-text mb-1">Item Form: Powder</p>
                  <p className="card-text mb-1">Flavour: Unflavoured</p>
                  <p className="card-text mb-1">Net Quantity: 100.0 gram</p>
                  <p className="card-text mb-1">Package Type: Jar</p>
                  <button
                    className="col-6 btn btn-lg btn-dark float-right mt-5"
                    type="submit"
                    name="shopVitaCreatine"
                  >
                    <a href="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="card shadow text-left"
                style={{ margin: "auto", width: "90%" }}
              >
                <img
                  src="src\static\assets\Classic\Protein-Podwde-1.jpg"
                  className="card-img-top"
                  alt="Protein Powder"
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold text-uppercase m-0">
                    ShopVita Premium Protein Powder
                  </h4>
                  <p className="display-6 mt-1 mb-4">₹1,699.00</p>
                  <p className="card-text mb-1">Brand: ShopVita</p>
                  <p className="card-text mb-1">Flavour: Belgian Chocolate</p>
                  <p className="card-text mb-1">Item Form: Powder</p>
                  <p className="card-text mb-1">Net Quantity: 1000.0 gram</p>
                  <p className="card-text mb-1">Package Type: Jar</p>
                  <button
                    className="col-6 btn btn-lg btn-dark float-right mt-5"
                    type="submit"
                    name="shopVitaProtein"
                  >
                    <a href="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
