import React from "react";
import Footer from "../components/Footer/Footer";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeSect1 from "../components/HomeSect1/HomeSect1";
import SubHeader from "../components/HomeSubHeader/SubHeader";
import Nav from "../components/Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <HomeHeader />
      <SubHeader />
      <HomeSect1 />
      <Footer />
    </>
  );
};

export default Home;
