import React from "react";

import "./Intro.css";

const Intro = () => {
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
            <button type="button" className="custom__button">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="app__background__transparent"></div>
    </div>
  );
};

export default Intro;
