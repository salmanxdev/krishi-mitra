import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import ScreenInfo from '../../components/ScreenInfo.js';

function LandingPage() {
  const images = [
    "/assets/hero1.jpg",
    "/assets/hero2.jpg",
    "/assets/hero6.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="landingpage">
      {/* Navbar */}
      <div className="navbarsection">
        <div className="navbar">
          <a href="#home">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="#news">News</a>
          <a href="#login">Login</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="herosection">
        <div className="hero-slideshow">
          <img
            src={images[index]}
            alt="herosection"
            className="hero-image"
          />
          <button className="prev-btn" onClick={prevSlide}>❮</button>
          <button className="next-btn" onClick={nextSlide}>❯</button>
          <div className="dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${index === i ? "active" : ""}`}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        </div>

        <div className="logo">KRISHI MITRA</div>
        <p>
          "Krishi-Mitra is a smart farming app designed to support farmers with
          the power of AI and digital technology. From accurate weather forecasts
          and AI-based plant disease detection to local-language chatbots and easy
          video workshops, Krishi-Mitra makes modern farming simple, accessible,
          and effective. Whether you are looking to protect your crops, learn new
          methods, or stay updated with the latest agricultural insights,
          Krishi-Mitra is your trusted companion in the field."
        </p>
        <a href="#home">GET STARTED</a>
      </div>

      {/* Section 2 */}
      <div className="section2">
        <h1>How we do this?</h1>
        <div className="cards">
          <div className="card">
            <h3>Weather Forecast</h3>
            <p>
              Helps you to get accurate, real-time weather updates tailored to your
              farm location. Our smart forecasting helps you plan sowing,
              irrigation, and harvesting with confidence, reducing risks from
              unexpected weather changes
            </p>
          </div>
          <div className="card">
            <h3>Crops Analysis</h3>
            <p>
              Monitor your crops with ease. Our crop analysis tool provides insights
              on crop health, growth stage, and potential risks, helping you make
              smarter decisions for better yield and quality
            </p>
          </div>
          <div className="card">
            <h3>Mandi Update</h3>
            <p>
              Get daily mandi prices and market trends for your crops. Stay informed
              and overcome low-price challenges by knowing the best time and place
              to sell for better profits.
            </p>
          </div>
          <div className="card">
            <h3>Government Schemes & Advisory</h3>
            <p>
              Helps you to stay updated with the latest government schemes and
              initiatives. Get personalized suggestions based on your crops and
              farming profile, and easily check your eligibility to access benefits
            </p>
          </div>
          <div className="card">
            <h3>Ask Krishi</h3>
            <p>
              Ask Krishi is your AI farming guide, trained on Indian agricultural
              practices. Get personalized advice to grow, manage, and harvest your
              crops more effectively and efficiently
            </p>
          </div>
          <div className="card">
            <h3>Multilingual Support</h3>
            <p>
              No language barriers! Get all information, updates, and guidance in
              your own native language—making farming support easier and more
              personal
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <section className="footer-section">
        <div className="footer">
          <div className="footermain">
            <div className="krishi-mitra">
              <div className="logo2">KRISHI-MITRA</div>
              <h4>Your Companion in Farming</h4>
              <div className="icons">
                <a href="#instagram"><img src="/assets/logo.png" alt="logo"/></a>
                <a href="https://instagram.com"><img src="/assets/logo.png" alt="logo" /></a>
                <a href="https://instagram.com"><img src="/assets/logo.png" alt="logo" /></a>
                <a href="https://instagram.com"><img src="/assets/logo.png" alt="logo" /></a>
              </div>
            </div>
            <div className="quicklinks">
              <h>Quick Links</h>
              <a href="#home" className="quicklinks">Home</a>
              <a href="#feature" className="quicklinks">Feature</a>
              <a href="#howitworks" className="quicklinks">How it Works</a>
              <a href="#pricing" className="quicklinks">Pricing</a>
              <a href="#faq" className="quicklinks">FAQ</a>
              <a href="#contact" className="quicklinks">Contact</a>
            </div>
            <div className="resources">
              <h>Resources</h>
              <a href="#AI-Assistance" className="resources">AI-Assistance</a>
              <a href="#Multilingual" className="resources">Multilingual</a>
              <a href="#community" className="resources">Community</a>
              <a href="#e-market" className="resources">e-market</a>
            </div>
            <div className="legal">
              <h>Legal</h>
              <a href="#privacypolicy" className="legal">Privacy Policy</a>
              <a href="#termsofservice" className="legal">Terms of Services</a>
            </div>
          </div>
          <div className="footermid">
            <h3>
              "Krishi-Mitra is a smart farming app designed to support farmers with
              the power of AI and digital technology. From accurate weather forecasts
              and AI-based plant disease detection to local-language chatbots and easy
              video workshops, Krishi-Mitra makes modern farming simple, accessible,
              and effective. Whether you are looking to protect your crops, learn new
              methods, or stay updated with the latest agricultural insights,
              Krishi-Mitra is your trusted companion in the field."
            </h3>
          </div>
          <div className="footerbottom">
            <h>© 2025 KRISHI-MITRA. All rights reserved</h>
          </div>
        </div>
      </section>

      {/* WIP Section */}
      <div>Work In Progress:</div>
      <h1>LAUNCHING SOON....</h1>
    </section>
  );
}

export default LandingPage;