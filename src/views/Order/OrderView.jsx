import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import swal from "sweetalert";
import { OrderCard, OrderPrice } from "../../components";
import { useOrder } from "../../contexts/OrderProvider";
import "./OrderView.css";

const OrderView = () => {
  const { order, setOrder } = useOrder();
  const navigate = useNavigate();
  return (
    <main className="app_main">
      <div className="app__back_page">
        <Link className="app__link_back" to="/menu">
          <MdOutlineKeyboardBackspace /> <span>Back</span>
        </Link>
      </div>
      {order.length > 0 ? (
        <div className="app__container_order">
          <div className="app__row_order">
            <div className="app__column_order">
              <div className="order__box">
                <div className="order_address">
                  <p>
                    Deliver Place :{" "}
                    <span className="font-semibold text-black">
                      411 33 Gothenburg
                    </span>
                  </p>
                  <p>Arriving in 20-30 min</p>
                  <p>
                    Road :{" "}
                    <span className="font-semibold text-black">
                      Gibraltargatan 19
                    </span>
                  </p>
                  <p>
                    Floor : <span className="font-semibold text-black">6</span>{" "}
                  </p>
                  <p>
                    Deliver to :{" "}
                    <span className="font-semibold text-black">User Name</span>{" "}
                  </p>
                </div>
                <div className="order_item">
                  {order.map((item) => (
                    <OrderCard key={item.id} {...item} />
                  ))}
                </div>
                <div className="order_price">
                  <OrderPrice {...order} />
                </div>
                <div className="place_order">
                  <button
                    onClick={() => {
                      swal(
                        "Order Successfully Placed",
                        `You have order ${order.length} times successfully`,
                        "success"
                      );
                      setOrder([]);
                      navigate("/order-successful");
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="app_empty_order">
          <h1 className="text-center text-5xl text-primary poppins">
            No Order has added!!
          </h1>
        </div>
      )}
    </main>
  );
};

export default OrderView;
