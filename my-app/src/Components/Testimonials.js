import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"
const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
        <p className='primary-subheading'>Testimonials</p>
        <h1 className='primary-heading'>What They Say</h1>
        <p className='primary-text'>
            This is what our customers have to say about us. 
            Kindly drop your comments below.
        </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''/>
            <p>
            Buka is one of the best restaurant, they deliver on time
            and their food is tasty. Services is top notch. 
            </p>
            <div className='testimonial-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>Debo Shopade</h2>
        </div>

    </div>
  )
}

export default Testimonials