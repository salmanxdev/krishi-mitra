import React from 'react';
import {Link} from 'react-router-dom';
import './landingpage.css'
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
  </section>
  );
}
export default LandingPage;