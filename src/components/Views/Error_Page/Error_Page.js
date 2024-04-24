import React from "react";

export const Error_Page = () => {
  return (
    <div className="error">
      <a>
        {" "}
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
      </a>

      <h1> 404 </h1>
      <h2>Page Not Found</h2>
      <p>
        We’re sorry, the page you have looked for does not exist in our website!
        Maybe go to our home page or try to use a search?
      </p>
      <button className="btn">Go to Homepage</button>
    </div>
  );
};
