import React from 'react'
import "../Components/Team.css";
import exe1 from "../assets/images/img2.png"
import exe7 from "../assets/images/img7.png"
import exe8 from "../assets/images/img8.png"
import exe13 from "../assets/images/img13.jpg"

const Team = () => {
  return (
    <div className='execos'>
        <div className="exe">
            <img src={exe1} alt="exe1" />
        </div>
        <div className="exe">
            <img src={exe7} alt="exe1" />
        </div>
        <div className="exe">
            <img src={exe13} alt="exe1" />
        </div>
        <div className="exe">
            <img src={exe8} alt="exe1" />
        </div>

    </div>
  )
}

export default Team