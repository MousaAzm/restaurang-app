import React from "react";
import { images } from "../../constants";
import { TitleHeading } from "../../components";
import { useNavigate } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <TitleHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">Welcome to Pandora restaurant</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour{" "}
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() => navigate(RoutingPath.booktableView)}
        >
          Book Table
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.hero} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
