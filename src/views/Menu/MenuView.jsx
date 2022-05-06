import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import { ClapSpinner } from "react-spinners-kit";
import useFetch from "../../hook/useFetch";
import "./MenuView.css";

const MenuView = () => {
  const [foods] = useFetch();
  const [menuTab, setMenuTab] = useState("Breakfast");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };

  return (
    <main className="app__menu__main">
        <div className="app__menu__container">
          <div className="app__display__bord">
            <div className="app__filter_btn_container">
              <div className="app__filter_button">
                <p className={ menuTab === "Breakfast" ? "active_menu_tab" : "menu_tab"}  
                  onClick={() => handleMenuTabs("Breakfast")}>
                  Breakfast
                </p>
                <p className={ menuTab === "Lunch" ? "active_menu_tab" : "menu_tab"} 
                   onClick={() => handleMenuTabs("Lunch")}>
                  Lunch
                </p>
                <p className={ menuTab === "Dinner" ? "active_menu_tab" : "menu_tab"} 
                  onClick={() => handleMenuTabs("Dinner")}>
                  Dinner
                </p>
              </div>
            </div>
            <div className="app_items_container">
              <div className="app__items">
                {loading ? (
                  <span className="app__spinner">
                    <ClapSpinner
                      size={30}
                      frontColor="#FBA580"
                      backColor="#FBA580"
                    />
                  </span>
                ) : (
                  <div className="app__display_card">
                    {foods.filter((item) => menuTab === item.foodType).map((food) => {
                        return (
                          <Card
                            id={food.id}
                            key={food.id}
                            foodType={food.foodType}
                            url={food.url}
                            title={food.title}
                            description={food.description}
                            price={food.price}
                            onClick={food.id}
                          />
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default MenuView;
