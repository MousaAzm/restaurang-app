import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCart2 } from 'react-icons/bs';
import { IoMenu } from "react-icons/io5";
import RoutingPath from "../../routes/RoutingPath";
import { useOrder } from '../../contexts/OrderProvider';
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { order } = useOrder();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/" onClick={() => navigate(RoutingPath.homeView)}>
          <img src={images.logo} alt="app__logo" />
        </a>
      </div>
      <div className="app__navbar_menu">
        <ul>
          <li>
            <div
              className="app__content_cart"
              onClick={() => navigate("/orders")}
            >
              <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">
              {order.length}
              </span>
              <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
            </div>
          </li>
          <li>
            <span
             className="menu_btn"  onClick={() => navigate(RoutingPath.menuView)}
            >
            <IoMenu className="menu_icon"/>
              Menu
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
