import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { BsCart2 } from 'react-icons/bs';
import { useParams, useNavigate  } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { useOrder } from '../../contexts/OrderProvider';
import "./FoodDetailView.css";

const FoodDetailView = () => {
  const [quantity, setQuantity] = useState(1);
  const [foods] = useFetch();
  const { foodId } = useParams();
  const getId = parseInt(foodId);
  const { handleOrder } = useOrder();
  const navigate = useNavigate();
    
  

  return (
    <main className="app__main">
      <div className="app__back_page">
        <Link className="app__link_back" to="/menu"> <MdOutlineKeyboardBackspace /> <span>Back</span></Link>
      </div>
          {foods.filter((item) => item.id === getId).map((food) => (
              <div className="app__container_detail">
                <div className="app__row_detail" key={food.id} >

                  <div className="app_content_info">
                    <h1 className="title">
                      {food.title}
                    </h1>
                    <p>
                      {food.description}
                    </p>

                    <div className="app__content_quantity">
                                <h1>${(food.price * quantity).toFixed(2)}</h1>
                                <div className="app__quantity_button">
                                    <AiOutlineMinus onClick={() => {
                                        quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
                                    }}
                                        className="app__quantity_minus"
                                    />
                                    <span>{quantity}</span>

                                    <AiOutlinePlus onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                        className="app__quantity_plus"
                                    />
                                </div>
                    </div>
           
                    <div>
                      <button className="app__content_btn" onClick={() => {
                        food['quantity'] = quantity;
                        food.price = food.price * quantity;
                        swal("Cool!!!", "Your order has added to the cart", "success");
                        navigate('/orders');
                        handleOrder(food);
                      }} >
                        <BsCart2 className="text-xl" /> 
                        <span>Add to Cart</span>
                      </button>
                    </div>
                               
              </div>
                  <div className="app_content_image">
                    <img src={food.url} alt="food" />
                  </div>
                </div>
              </div>
            ))}
    </main>
  );
};

export default FoodDetailView;
