import React from 'react';
import {Link} from 'react-router-dom';
import './landingpage.css'
import ScreenInfo from '../../components/ScreenInfo.js';
function LandingPage(){
return(
  <section className="landingpage">
    <div className="navbarsection">
      <div className="navbar">
        <a href='#home'>Home</a>
        <a href='#aboutus'>About Us</a>
        <a href='#news'>News</a>
        <a href='#login'>Login</a>
      </div>
      </div>
      <div className="herosection">
        <img src="/assets/hero.png" alt="herosection"/>
        <div className="logo">
          KRISHI MITRA</div>
        <p>"Krishi-Mitra is a smart farming app designed to support farmers with the power of AI and digital technology. From accurate weather forecasts and AI-based plant disease detection to local-language chatbots and easy video workshops, Krishi-Mitra makes modern farming simple, accessible, and effective. Whether you are looking to protect your crops, learn new methods, or stay updated with the latest agricultural insights, Krishi-Mitra is your trusted companion in the field."</p>
        <a href="#home">GET STARTED</a>
        </div></section>
  );
}
export default LandingPage;