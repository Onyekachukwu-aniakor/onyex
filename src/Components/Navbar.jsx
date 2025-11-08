import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../assets/images/logo1.jpg"
import menus from "../assets/images/menu1.png"
import {Link} from "react-scroll"

const Navbar = () => {
    
    const [mobileMenu, setMobileMenu]= useState(false);
    const toggleMenu =()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  return (

    <nav className="Nav container">
        <img className='logo' src={logo} alt="logo" />
        <ul className={mobileMenu?"":"hide-mobile-menu"}>
            <li><Link to="hero"
               smooth={true}
               offset={0}
               duration={500}>Home</Link></li>
            <li><Link to="about"
               smooth={true}
               offset={0}
               duration={500}>About Us</Link> </li>
            <li><Link to="executives" smooth={true}
               offset={-260}
               duration={500}>Executives</Link></li>
            {/* <li><Link to="members" smooth={true}
               offset={-260}
               duration={500}> Members</Link></li> */}
            <li><Link to="new-members" smooth={true}
                offset={0}
                duration={500}>New Members</Link></li>
            <li><Link to="welfare"
                smooth={true}
                offset={0}
                duration={500}>Welfare</Link></li>
            <li><Link to="contact"
                smooth={true}
                offset={-150}
                duration={500} className='btn'>Contact Us</Link>
            </li>
        </ul>
        <img src={menus} alt="menu" className="menu" onClick={toggleMenu} />

    </nav>
   
  )
}

export default Navbar