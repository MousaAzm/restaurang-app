import React from "react";
import { useNavigate } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/" onClick={() => navigate(RoutingPath.homeView)}>
          {" "}
          <img src={images.logo} alt="app__logo" />{" "}
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/" onClick={() => navigate(RoutingPath.homeView)}>
            Home
          </a>
        </li>
        <li className="p__opensans">
          <a href="#about" onClick={() => navigate(RoutingPath.homeView)}>
            About
          </a>
        </li>
        <li className="p__opensans">
          <a href="#menu" onClick={() => navigate(RoutingPath.homeView)}>
            Menu
          </a>
        </li>
        <li className="p__opensans">
          <a href="#contact" onClick={() => navigate(RoutingPath.homeView)}>
            Contact
          </a>
        </li>
      </ul>
      <div className="app__navbar_book">
        <span
          className="p__opensans"
          onClick={() => navigate(RoutingPath.booktableView)}
        >
          Book Table
        </span>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="/" onClick={() => {setToggleMenu(false); navigate(RoutingPath.homeView)}}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => {setToggleMenu(false); navigate(RoutingPath.homeView)}}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => {setToggleMenu(false); navigate(RoutingPath.homeView)}}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => {setToggleMenu(false); navigate(RoutingPath.homeView)}}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="app__navbar_book_smallscreen">    
              <span
                className="p__opensans"
                onClick={() => {setToggleMenu(false); navigate(RoutingPath.booktableView)}}
              >
               Book Table
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
