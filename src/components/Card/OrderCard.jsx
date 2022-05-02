
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useOrder } from '../../contexts/OrderProvider';
import "./OrderCard.css"

const OrderCard = (props) => {
    const { removeOrder } = useOrder();

    return (
        <div className="app__card_order">
            <div className="app__card_order_image">
                <img src={props.url} alt="food img" /> 
            </div>
            <div className="card_order_info">
                <h5 className="text-base poppins text-gray-700">{props.title}</h5>
                <h1 className="font-semibold text-lg text-primary poppins">${props.price.toFixed(2)}</h1>
                <p className="text-sm poppins text-gray-400">{props.foodType}</p>
            </div>

            <div className="card_order_items_total">
                <span>{props.quantity} items</span>
            </div>
        
            <div className="order_flex_icon">
                <AiOutlineDelete className="w-6 h-6 text-gray-600 transform transition hover:scale-105 duration-500 cursor-pointer" onClick={() => removeOrder(props.id)} />
            </div>
        </div>
    )
}

export default OrderCard