import React from "react";
import "../HomeHeader/HomeHeader.scss";
import txt from "../../assets/images/txt.png";
import arrow from "../../assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="home_header">
        <div className="container">
          <div className="main_header">
            <div className="header_contents">
              <img src={txt} alt="natural 100%" />
              <h1>
                Choose the best <br /> healthier way <br /> of life
              </h1>
              <button onClick={() => navigate("/shop")}>
                Explore Now
                <img src={arrow} alt="arrow icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
