import React from 'react'
import Navbar from './Navbar'
import Logo from "../Assets/Logo.svg"
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
       <Navbar/>
       <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt="" />
        </div>
        <div className='home-text-section'>
            <h1 className='primary-heading'>
              Your Favourite Meals Delivered Hot And Fresh
            </h1>
            <p className='primary-text'>
              Professional and Healthy switcher chefs to do all the prepping,
              like chopping and marinating, to enable you cook fresh meals.
            </p>
            <button className='secondary-button'>
              Order Now <FiArrowRight/>
            </button>
       
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Home