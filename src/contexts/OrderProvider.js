import React, { createContext, useContext, useState } from 'react';

export const OrderContext = createContext();

export const useOrder = () => {
    return useContext(OrderContext)
}
const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    const handleOrder = (food) => {
        setOrder((prevValue) => {
            return [
                ...prevValue,
                food, 
            ]
        })
    }

    const removeOrder = (id) => {
        setOrder((prev) => {
            return prev.filter(item => {
                return item.id !== id
            })
        })
    }


    const value = {
        setOrder,
        order,
        handleOrder,
        removeOrder
    }
    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider