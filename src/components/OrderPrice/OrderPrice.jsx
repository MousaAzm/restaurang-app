import React from 'react'
import { useOrder } from '../../contexts/OrderProvider';
import "./OrderPrice.css"


const OrderPrice = () => {
    const {order} = useOrder();

    let allPrice = 0;
    for (var i = 0; i < order.length; i++){
        allPrice += order[i].price * order[i].quantity
    }

    const subTotal = parseFloat(allPrice.toFixed(2));
    const tax = parseFloat((allPrice % 2.5).toFixed(2));
    const deliveryFee = parseFloat((allPrice % 5).toFixed(2));
    const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2))
    
    return (
        <div className="app__order_price_container">
            <div className="items">
                <span className="span-left">Subtotal</span>
                <span className="span-right">${subTotal}</span>
            </div>
            <div className="items">
                <span className="span-left">Tax</span>
                <span className="span-right">${tax}</span>
            </div>
            <div className="items">
                <span className="span-left">Delivery Fee</span>
                <span className="span-right">${deliveryFee}</span>
            </div>
            <div className="items">
                <span className="span-left">Total</span>
                <span className="span-right">${total}</span>
            </div>
        </div>
    )
}

export default OrderPrice