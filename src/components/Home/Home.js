import React from 'react'
import homePhoto from "./HomeImage/photo-1601758002737-1919f3ba2774.avif"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <div className='home-1'>
            <p>Welcome !</p>
            <h1> All you need <br /> under one roof </h1>
            <h2>DISCOVER THE UNIVERSE THE LARGEST STORE <br /> SPECIALIZED IN WELLNESS AND LIFESTYLE.</h2>
            <div className='btn'>
            <button>Shop Now</button>
            
            <button>Service  </button>
            </div>
            <div className='home-1-bottom'>
                <div className='bottom-1'>
                    <h2>85k+</h2>
                    <h4>Happy Clints</h4>
                </div>
                <div className='bottom-1'>
                    <h2>99%</h2>
                    <h4>Protection</h4>
                </div>
                <div className='bottom-1'>
                    <h2>101%</h2>
                    <h4>Love</h4>
                </div>

            </div>

        </div>
        <div className='home-2'>
            <img src={homePhoto} alt="homeImage" />
        </div>
         


    </div>
  )
}

export default Home