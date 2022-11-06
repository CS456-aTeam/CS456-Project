import React from 'react';
import {Button} from './Button';
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className ='footer-container'>
        <section className = 'footer-subscription'>
            <p className = "footer-subscription-heading">
                Thank you for checking out our website today!
            </p>
            <p className = "footer-subscription-text">
                Enter email to get special deals!
            </p>
            <div className = "input-areas">
                <form>
                    <input type="email" name = "email" placeholder = "Your Email" 
                    className = 'footer-input'/>
                    <Button buttonStyle = 'btn--outline'> Subscribe </Button>
                </form>
            </div>
        </section>
        <div className = "footer-links">
            <div className = "footer-link-wrapper">
                <div className = "footer-link-items">
                    <h2>About Us</h2>

                    <Link to = "/">History</Link>
                    <Link to = "/">Certification</Link>
                    <Link to = "/">Sponsors</Link>
                    <Link to = "/">Terms of Services</Link>
                    <Link to = "/">Privacy Policy</Link>
                </div>
                <div className = "footer-link-items">
                    <h2>Social Media</h2>
                    <Link to = "/">Facebook</Link>
                    <Link to = "/">Instagram</Link>
                    <Link to = "/">Twitter</Link>
                    <Link to = "/">Youtube</Link>
                    <Link to = "/">Github</Link>
                    
                </div>
                <div className = "footer-link-items">
                <h2>Members</h2>
                <Link to = "/">Benjamin Nguyen</Link>
                <Link to = "/">Christian Fluharty</Link>
                <Link to = "/">Vince Nguyen</Link>
                <Link to = "/">Suha Cho</Link>
                <Link to = "/">Rene Huynh</Link>
                
                </div>
            </div>
            
        </div>
        <section className = "social-media">
            <div className = "social-media-wrap">
                <div className = "footer-logo">
                    <Link className= "social-logo">
                        DV <i className = "fab fa-typo3"/>
                    </Link>
                </div>
                <small className = "website-rights"> Data Viewer © 2022</small>
                <div className = "social-icons">
                    <Link className = "social-icon-link facebook" to = "/" target = "_blank" aria-label="Facebook">
                        <i className = "fab fa-facebook-f"></i>
                    </Link>
                    <Link className = "social-icon-link instagram" to = "/" target = "_blank" aria-label="Instagram">
                        <i className = "fab fa-instagram"></i>
                    </Link>
                    <Link className = "social-icon-link twitter" to = "/" target = "_blank" aria-label="Twitter">
                        <i className = "fab fa-twitter"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer