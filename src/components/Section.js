import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Section.css';



const Section = () => {
  return (
    <div className = 'hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Data Viewer</h1>
        <p>Welcome to the world's largest data viewer system</p>
        <div className = "hero-btns">
            <Button className = 'btns' buttonStyle='btn--outline'
            buttonSize = 'btn--large'> Get Started </Button>
        </div>
        
        <div className = "hero-btns">
            <Button className = 'btns' buttonStyle='btn--primary'
            buttonSize = 'btn--large'> Watch <i className = "far fa-play-circle" />
            </Button>
        </div>


    </div>
  )
}

export default Section