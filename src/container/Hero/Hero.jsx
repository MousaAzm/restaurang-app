import React from "react";
import { images } from "../../constants";
import { TitleHeading } from "../../components";
import { useNavigate } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="app__hero app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <TitleHeading title="Chase the new flavour" />
        <h1 className="app__hero-h1">Your needs, minutes from your door</h1>
        <button
          type="button"
          className="custom__button"
          onClick={() => navigate(RoutingPath.menuView)}
        >
          GET STARTED
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.hero} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
