import React from 'react'
import './Hero.css'
import ProPic from '../../assets/profile picture.jpg' 

function Hero() {
  return (
    <section className='hero-section'>
        <div className='wrapper'>
            <h1>SHAN GANEGODA</h1>
            <div className='profile'>
                <p>Full Stack Developer with a passion to create awesome web applications.</p>
                <p>Loves collaboration, learning and growing.</p>
                <div>
                <img className='pro-pic' src={ProPic} height={350} width={250}></img>
                <p>Pasir Ris, Singapore.</p>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Hero
