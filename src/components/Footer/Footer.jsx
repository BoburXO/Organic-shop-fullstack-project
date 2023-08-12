import React from "react";
import "../Footer/Footer.scss";
import f1 from "../../assets/icons/f1.svg";
import f2 from "../../assets/icons/f2.svg";
import f3 from "../../assets/icons/f3.svg";
import f4 from "../../assets/icons/f4.svg";
import logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_parent">
            <div className="sub_foot2">
              <h1>
                <img src={logo} alt="LOGO" />
                Organic
              </h1>
              <br />
              <p>
                Simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum simply dummy text of the printing{" "}
              </p>
              <br />
              <div className="social_media">
                <a href="https://www.instagram.com/">
                  <img src={f1} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/">
                  <img src={f2} alt="Facebook" />
                </a>
                <a href="https://twitter.com/">
                  <img src={f3} alt="Twitter" />
                </a>
                <a href="https://pinterest.com/">
                  <img src={f4} alt="Pinterest" />
                </a>
              </div>
            </div>
            <div className="sub_foot1">
              <h3>Contact Us</h3>
              <br />
              <b>Email</b>
              <p>boburhatamov7@gmail.com</p>
              <br />
              <b>Phone</b>
              <p>+998 99 855 73 85</p>
              <br />
              <b>Address</b>
              <p>88 road, broklyn steet, USA</p>
            </div>
            <div className="sub_foot3">
              <h3>Utility Pages</h3>
              <br />
              <p>Style Guide</p>
              <br />
              <p>404 Not Found</p>
              <br />
              <p>Password Protected</p>
              <br />
              <p>Licences</p>
              <br />
              <p>Changelog</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
