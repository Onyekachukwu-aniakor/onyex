import React from 'react'
import "./NewMembers.css";
import newMember from "../assets/images/img6.png"

const NewMembers = () => {
  return (
    <div className='new-members'>
      <div className="new-members-left">
                  <img className='new-member-img' src={newMember} alt="newMember" />
              </div>
              <div className="new-member-right">
            <h2 >New Members</h2>
            <p>New members are welcome to the De Achievers social group. The group has unanimously agreed that every new member will pay a statutory amount of £20 as official membership registration fee, while the monthly dues is £15 per person.</p>

<p>We are always ready to welcome new members to the group, for health and fitness is wealth.</p>

            

        </div>
    </div>
  )
}

export default NewMembers