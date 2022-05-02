import React, { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { ClapSpinner } from "react-spinners-kit";
import "./OrderSuccessfulView.css";

const OrderSuccessfulView = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="app_successful_main">
      {loading ? (
        <div className="app_successful_spinner">
          <ClapSpinner size={30} frontColor="#FBA580" backColor="#FBA580" />
        </div>
      ) : (
        <div className="app_successful_container">
          <div className="app_successful_column">
            <span>
              <BsCheckLg />
            </span>
            <h1>Thank you</h1>
            <h2>For your order</h2>
            <img src={images.order_image} alt="order-img" />
            <Link className="button-home" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default OrderSuccessfulView;
