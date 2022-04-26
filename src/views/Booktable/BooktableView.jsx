import React, { useState, useEffect } from "react";
import DataAPIService from "../../api/services/DataAPIService";
import { Card } from "../../components";
import { ClapSpinner } from "react-spinners-kit";
import "./BooktableView.css";

const BooktableView = () => {
  const [resData, setData] = useState([]);
  const [menuTab, setMenuTab] = useState('Breakfast')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        await DataAPIService.getAllDishes().then(
          (response) => {
            setData(response.data);
            setTimeout(() => {
              setLoading(false)
             }, 1000);   
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleMenuTabs = (type) => {
    setMenuTab(type)
  }


  return (
    <div className="app__book__table">
      <div className="app__book__container">
        <div className="app__display__bord">
          <div className="app__filter_button">
                <p className={menuTab === 'Breakfast' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</p>
                <p className={menuTab === 'Lunch' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('Lunch')}>Lunch</p>
                <p className={menuTab === 'Dinner' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('Dinner')}>Dinner</p>
          </div>
        
        <div className="app__items">
          {loading ? (
            <span className="app__spinner">
              <ClapSpinner size={30} frontColor="#FBA580" backColor="#FBA580" />
            </span> 
          ) : ( <div className="app__display_card"> {resData.filter((item) => menuTab === item.foodType).map((item) => {
                return (
                  <Card
                    onDelete={item.id}
                    key={item.id}
                    foodType={item.foodType}
                    url={item.url}
                    title={item.title}
                    description={item.description}
                    price ={item.price}
                  />
                );
              })} 
              </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default BooktableView;
