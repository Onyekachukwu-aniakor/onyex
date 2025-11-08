import React from 'react'
import {useRef} from "react";
import "./Executives.css";
import execopeople from "../assets/images/exe1.png"
import execopeople2 from "../assets/images/exe2.png"
import execopeople3 from "../assets/images/exe3.png"
import execopeople4 from "../assets/images/exe4.png"
import execopeople5 from "../assets/images/exe5.png"
import prev from "../assets/images/prev1.png"
import nexts from "../assets/images/next.png"


const Executives = () => {
    const slider = useRef();
    let tX = 0;

    const slideForward = ()=>{
          if(tX > -50) {
             tX -= 25  
          }
        slider.current.style.transform= `translateX(${tX}%)`

    }
    const slideBackward = ()=> {
        if(tX < 0) {
             tX +=25  
        }  
        slider.current.style.transform= `translateX(${tX}%)`;


    }
  return (
    <div className='executives'>
        <img src={nexts} alt="next" className='next' onClick={slideForward}/>
         <img src={prev} alt="prev" className='prev' onClick={slideBackward} />
            
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={execopeople} alt="EXECO" />
                                <div>
                                    <h3>Mr Chiemeka Opara</h3>
                                    <span>Chairman</span>
                                </div>

                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={execopeople2} alt="EXECO" />
                                <div>
                                    <h3>Mr Isaac Osagie</h3>
                                    <span>Financial Secretary</span>
                                </div>

                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={execopeople3} alt="EXECO" />
                                <div>
                                    <h3>Mr Christopher Falola</h3>
                                    <span>Secretary</span>
                                </div>

                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={execopeople4} alt="EXECO" />
                                <div>
                                    <h3>Mr Chidozie Odidika</h3>
                                    <span>Treasurer</span>
                                </div>

                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={execopeople5} alt="EXECO" />
                                <div>
                                    <h3>Mr Seun Fiola</h3>
                                    <span>Welfare</span>
                                </div>

                            </div>
                        </div>

                    </li>
                </ul>

            
            </div>
        
       
    </div>
  )
}

export default Executives