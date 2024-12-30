import React from 'react'
import './Hero.css';
import hai from '../Assets/hand_icon.png'
import right_arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero-content'>
            <div className='hero-main'>
                <div className='hero-left'>
                    <h3 className='special'>NEW ARRIVALS ONLY</h3>
                    <div className='hai'>
                        <p>new</p>
                        <img src={hai}></img>
                    </div> 
                    <div>
                    <p id='sai'>Collections</p>
                    <p id='sai'> for everyone</p>
                    </div>
                    <div className='latest'>
                        <p>Latest Collections</p>
                        <img src={right_arrow}></img>
                    </div>
                </div>
                <div className='hero-right'>
                    <img src={hero_image}></img>
                </div>
            </div>
        </div>
    )
}

export default Hero
