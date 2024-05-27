import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="my-container">
        <div className="upperpart row g-4 d-flex flex-wrap">
          <div className="flex-grow-1">
            <div className="  heading col-lg-3">
              <h1>Freggies</h1>
            </div>
            <br></br>
          </div>
          <div className="searchbar_container container ">
            <div className="row">
              <input
                className="searchbar flex col"
                type="text"
                placeholder="Your Email"
              ></input>

              <button
                className="my-btn  ms-n10"
                style={{
                  height: "51px",
                  marginLeft: "-50px",
                  backgroundColor: "rgb(145, 211, 40)",
                  color: "white",
                }}
              >
                Subscribe Now
              </button>
            </div>
          </div>

          <div className="social_links ">
            <button className="social" href="#">
              <i className="fa fa-twitter"></i>
            </button>
            <button className="social" href="#">
              <i className="fa fa-facebook-f"></i>
            </button>

            <button className="social" href="#">
              <i className="fa fa-youtube-play"></i>
            </button>
            <button className="social" href="#">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div>
          <a className="subheading" href="#">
            Fresh Products
          </a>
        </div>

        <hr className="my-line" />

        <div>
          <div className="jar row">
            <div className="col">
              <h3 className="another-heading" style={{ color: "white" }}>
                Why People Like us!
              </h3>
              <div className="my-txt" style={{ width: "300px" }}>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam varius rutrum mi iaculis rhoncus. There are many
                  variations of passages of Lorem Ipsum available.
                </p>

                <br></br>
                <button className="my-btn">Read More</button>
              </div>
            </div>
            <br></br>
            <div
              className="footer-col col "
              style={{ color: "rgba(255, 255, 255, .5) !important" }}
            >
              <h4 className="ruhi">Shop Info</h4>
              <ul>
                <li className="list">
                  <a href="#">About Us</a>
                </li>
                <li className="list">
                  <a href="#">Contact Us</a>
                </li>
                <li className="list">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list">
                  <a href="#">Terms & Condition</a>
                </li>
                <li className="list">
                  <a href="#">Return Policy</a>
                </li>
                <li className="list">
                  <a href="#">FAQs & Help</a>
                </li>
              </ul>
              <br></br>
            </div>
            <div className="footer-col col">
              <h4 className="ruhi">Account</h4>
              <ul>
                <li className="list">
                  <a href="#">My Account</a>
                </li>
                <li className="list">
                  <a href="#">Shop Details</a>
                </li>
                <li className="list">
                  <a href="#">Shopping Cart</a>
                </li>
                <li className="list">
                  <a href="#">Wish List</a>
                </li>
                <li className="list">
                  <a href="#">Order History</a>
                </li>
                <li className="list">
                  <a href="#">International Orders</a>
                </li>
              </ul>
              <br></br>
            </div>
            <div className="footer-col col">
              <h4 className="ruhi">Contact</h4>
              <ul>
                <li className="list"> Address:12345</li>
                <li className="list"> Email: freggies@gmail.com</li>
                <li className="list"> Phone: +91 84562 09871</li>
                <li className="list"> Payment Accepted</li>
              </ul>
              <img src="./images/payment.png" alt="Payment accepted" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
