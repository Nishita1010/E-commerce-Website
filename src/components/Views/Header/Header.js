import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

// import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <header>
      <div className="container-fluid fixed-top">
        <div className=" container uppermost p-3.5 d-none d-lg-block bg-primary">
          <div className="d-flex justify-content-between">
            <div className="  top-txt ps-2 col-md-6">
              <small className="me-3">
                <i
                  className="fa fa-map-marker txt me-2 text-secondary"
                  aria-hidden="true"
                  style={{fontSize: "18px"}}
                ></i>
                <a href="#" className="text-white text-decoration-none">
                  &nbsp;Apple Town, New Delhi&nbsp;&nbsp;
                </a>
              </small>
              <small className="me-3">
                <i
                  className="fa fa-envelope txt me-2 text-secondary"
                  aria-hidden="true"
                  style={{fontSize: "18px"}}
                ></i>
                <a href="#" className="text-white text-decoration-none">
                  &nbsp;freggies@gmail.com
                </a>
              </small>
            </div>

            <div className=" top-link py-2 pe-2 flex-end fw-normal col-md-6 text-right">
              <a href="#" className="text-white text-decoration-none">
                <small>Privacy Policy / &nbsp;</small>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <small>Terms of Use / &nbsp;</small>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <small>Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>

        <div className=" nav col-md-auto navbar-light bg-white justify-content-md-center d-flex ">
          <h1 className=" col col-lg-2 pt-1 text-start fw-bold text-color align-content-center ">   
            {"Freggies"}
          </h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Shop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Shop Detail
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Cart
                      </a>
                      <a className="dropdown-item" href="#">
                        Checkout
                      </a>
                      <a className="dropdown-item" href="#">
                        Testimonial
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Page 404
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <button
            className="navbar-toggler py-2 px-3 collapsed d-flex  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-expanded="false"
          >
            <span className="border border-light-subtle">
              <i className="bi bi-list  "></i>
            </span>
          </button>

          <span>
            <div className=" nav-icons w-full d-flex m-4 me-0">
              <button
                className="btn-search btn-border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="SearchModal"
              >
                <i className="fa fa-search " aria-hidden="true"></i>
              </button>
              <a href="#" className="cart position-relative me-4 my-auto">
                <i className=" fa bi bi-cart4"></i>
              </a>
              <a href="#" className=" cart my-auto">
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
            </div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
