import React from 'react'
import { images } from "../../constants"
import "./Homeapp.css";
const Homeapp = () => {
  return (
    <div className='app__home_app'>
       <div className="app__background__transparent"></div>
        <div className='container__homeapp'>
          <div className='home__apps_content'>
            <h1>Your favorite food - delivered straight to your door</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className='app__store_img'>
              <a href='#home'><img src={images.app_store} alt='app store google play'/></a> 
            </div>
          </div>
           <div className='app__cloumn_img'>
            <img src={images.mobile_app} alt="app_img" />
           </div>
        </div>
        <div className="app__background__transparent"></div>
    </div>
  )
}

export default Homeapp