import React from 'react'
import "./Welfare.css";
import welfare from "../assets/images/img6.png"

const Welfare = () => {
  return (
    <div className='welfares welfare'>
          <div className="welfare-left">
                      <img className='welfare-img' src={welfare} alt="welfare" />
                  </div>
                  <div className="welfare-right">
                <h2 >Welfare</h2>
                <p>We have unanimously agreed, as a group that not just to exercise but also care for our members, that any Financial member that is doing child dedication or is bereaved, shall receive a token of £500 from the group.</p>

                

<p>This money will be shared and contributed by members, other than the celebrant or the bereaved.</p>
                
    
                
    
            </div>
        </div>
  )
}

export default Welfare