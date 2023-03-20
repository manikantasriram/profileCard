import React from "react";
import "./Container.css";
import Header from "./Header";
import Footer from "./Footer";
import ProfileImg from "../assets/ManikantaSriram.jpg";

const container = () => {
  return (
    <div className="container">
      <Header />
      <div className="img-circle">
        <img src={ProfileImg} alt="profile" />
      </div>
      <Footer />
    </div>
  );
};

export default container;
