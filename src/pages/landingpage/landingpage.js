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
        </div>
        <div className="section2">
          <h1>How we do this?</h1>
          <div className="cards">
            <div className="card">
            <h3>Weather Forecast</h3>
            <p>Helps you to get accurate, real-time weather updates tailored to your farm location. Our smart forecasting helps you plan sowing, irrigation, and harvesting with confidence, reducing risks from unexpected weather changes</p>
            </div>
            <div className="card">
            <h3>Crops Analysis</h3>
            <p>Monitor your crops with ease. Our crop analysis tool provides insights on crop health, growth stage, and potential risks, helping you make smarter decisions for better yield and quality</p>
            </div>
            <div className="card">
            <h3>Mandi Update</h3>
            <p>Get daily mandi prices and market trends for your crops. Stay informed and overcome low-price challenges by knowing the best time and place to sell for better profits.</p>
            </div>
            <div className="card">
            <h3>Government Schemes & Advisory</h3>
            <p>Helps you to stay updated with the latest government schemes and initiatives. Get personalized suggestions based on your crops and farming profile, and easily check your eligibility to access benefits</p>
            </div>
            <div className="card">
            <h3>Ask Krishi</h3>
            <p>Ask Krishi is your AI farming guide, trained on Indian agricultural practices. Get personalized advice to grow, manage, and harvest your crops more effectively and efficiently</p>
            </div>
            <div className="card">
            <h3>Multilingual Support</h3>
            <p>No language barriers! Get all information, updates, and guidance in your own native language—making farming support easier and more personal</p>
            </div>
          </div>
        </div>
        
      
      
    
  </section>
  );
}
export default LandingPage;