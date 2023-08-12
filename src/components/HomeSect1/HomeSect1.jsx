import React from "react";
import "../HomeSect1/HomeSect1.scss";
import oranges from "../../assets/images/oranges.png";
import aboutUs from "../../assets/icons/aboutUs.svg";
import list from "../../assets/icons/list.svg";
import pochta from "../../assets/icons/pochta.svg";
import arrow from "../../assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";

const HomeSect1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="main_home_sect1">
        <div className="container">
          <div className="home_sect1">
            <div className="home_sect1_left">
              <img src={oranges} alt="Orange" />
            </div>
            <div className="home_sect1_right">
              <img src={aboutUs} alt="AboutUs" />
              <br />
              <br />
              <h1>
                We Believe in Working <br /> Accredited Farmers
              </h1>
              <br />
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had <br /> ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <br />
              <div className="sect1_twink">
                <img src={list} alt="List" />
                <span>
                  <h3>Organic Foods Only</h3>
                  <br />
                  <p>
                    Simply dummy text of the printing and typesetting <br />{" "}
                    industry. Lorem Ipsum
                  </p>
                </span>
              </div>
              <br />
              <div className="sect1_twink">
                <img src={pochta} alt="Pochta" />
                <span>
                  <h3>Quality Standards</h3>
                  <br />
                  <p>
                    Simply dummy text of the printing and typesetting <br />{" "}
                    industry. Lorem Ipsum
                  </p>
                </span>
              </div>
              <br />
              <button onClick={() => navigate("/shop")}>
                Shop Now
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSect1;
