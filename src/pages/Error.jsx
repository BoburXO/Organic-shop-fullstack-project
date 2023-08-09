import React from "react";
import Nav from "../components/Nav/Nav";
import arrow from "../assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="error_page">
        <div className="container error_con">
          <div className="error_content">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>The page you are looking for doesn't exist or has been moved</p>
            <button onClick={() => navigate("/")}>
              Go to Homepage
              <img src={arrow} alt="home arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
