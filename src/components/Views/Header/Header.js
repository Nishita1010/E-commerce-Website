import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';


const Header = () => {
  return (
    <header>
      <div className="container"></div>
      <div className="small">
        <a><i className="fa fa-map-marker" aria-hidden="true"></i></a>
        <a href="#">123 Street, New Delhi</a>
        <i className="fa fa-envelope" aria-hidden="true"></i>

        <a href="#"> ABC@email.com</a>
        <a href="#">  <small>Privacy Policy </small> / </a>
        <a href="#"> <small>Terms of Use</small> / </a>
        <a href="#"><small>Sales and Refunds</small> </a>

          
      </div>
      <h1> Freggies</h1>
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Shop Detail</a>
      <a href="#" className = "nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
        Pages
        
          <a href="#"><li>cart</li></a>
          <a href="#"><li>Testimonial</li></a>
          <a href="#"><li>Checkout</li></a>
          <a href="C:\Users\Nishita Namdeo\Downloads\My_work_at_vasi_gateways\freggies\src\components\Views\Error_Page\Error_Page.js"><li>404 Page</li></a>
        
      </a>
      <a href="#">Contact</a>
      <a><i className="fa fa-search" aria-hidden="true"></i></a>
       <a><i className="fa fa-lock" aria-hidden="true"></i></a>
       <a><i className="fa fa-user" aria-hidden="true"></i></a>

    </header>
  );
};

export default Header;
