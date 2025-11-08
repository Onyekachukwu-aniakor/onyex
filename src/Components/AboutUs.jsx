import React from 'react'
import "./AboutUs.css"
import aboutLeft from "../assets/images/img6.png" 

const AboutUs = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img className='about-img' src={aboutLeft} alt="aboutUs" />
        </div>
        <div className="about-right">
            <h2 >About Us</h2>
            <p>
We are a group of African and non African people based in Dudley, United Kingdom, who meet every Saturday in other to keep our body fit through exercise. Established in 2022, by a group of young men who believe in health and fittness.</p>

<p>As a community, we also organise football matches and tournaments with various African communities in the UK. We also use this gathering to deliver health information from experts amongs us.</p>

<p>We are now a family who share in our member's joy and also support them in time of difficulties. New members are always welcome to the group at any time.</p>
        </div>
    </div>
  )
}

export default AboutUs