import React from "react";
import { useNavigate } from "react-router";
import RoutingPath from "../../routes/RoutingPath";

import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="app__background__img">
        <div className="app__card__bg">
          <div className="app__inner__card">
            <h2>It is a long established</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button type="button" className="custom__button" onClick={() => navigate(RoutingPath.aboutUsView)}>
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className="app__background__transparent"></div>
    </div>
  );
};

export default Intro;
