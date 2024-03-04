import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=''/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt=''/>
        </div>
        <div className='about-section-text-container'>
                <p className='primary-suheading'>About</p>
                <h1 className='primary-heading'>Food Is An Important Part Of A Balanced Diet</h1>
                    <p className='primary-text'>
                        Food compliments happiness, with Buka you get to eat
                        and smile because we care about your happiness.
                    </p>
                    <p className='primary-text'>
                        We deliver anywhere in the state, distance is not a barrier.
                        Glovo, Chowdeck are our sponsored delivery company.
                    </p>
                    <div className='about-buttons-container'>
                            <button className='secondary-button'>Learn More</button>
                            <button className='watch-video-button'>
                            {""}
                            <BsFillPlayCircleFill/> Watch Video
                            </button>
                    </div>
        </div>
    </div>
  )
}

export default About