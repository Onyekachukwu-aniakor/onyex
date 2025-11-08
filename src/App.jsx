import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import Team from './Components/Team';
import AboutUs from './Components/AboutUs';
import Executives from './Components/Executives';
import Title from './Components/Title';
import NewMembers from './Components/NewMembers';
import Welfare from './Components/Welfare';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import ExistingMembers from './Components/ExistingMembers';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className=''>
      <Team/>
      <AboutUs/>
      <Title title="Executives"/>
      <Executives/>
      {/* <ExistingMembers/> */}
      <NewMembers/>
      
      <Welfare/>
      <ContactUs/>
      </div>
      <Footer/>
      
      

    </div>
  )
}

export default App