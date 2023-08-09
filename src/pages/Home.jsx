import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import SubHeader from "../components/HomeSubHeader/SubHeader";
import Nav from "../components/Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <HomeHeader />
      <SubHeader />
    </>
  );
};

export default Home;
