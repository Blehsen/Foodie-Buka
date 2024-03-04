import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData =[
        { 
            image: PickMeals,
            title: "Pick Meals",
            text: 'Tap here to pick your choice of meals.',
        },
        { 
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Click here to choose how often you want your meals to be delivered.", 
        },
        { 
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "We use both Glovo and Chowdeck as our delivery service.",
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it works</h1>
            <p className='primary-text'>
                Here is how Buka works, and how you can order from Buka restaurant.
                We give you the very best.
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) => (
              <div className='work-section-info'> 
              <div className='info-boxes-img-container'>
                <img src={data.image} alt=''/>
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
              </div> 
            ))}
        </div>
    </div>
  )
}

export default Work