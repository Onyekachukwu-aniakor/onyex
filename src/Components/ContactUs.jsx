import React from 'react'
import "./ContactUs.css";
import message from "../assets/images/email.png"
import meeting from "../assets/images/meeting.png"
import location from "../assets/images/location.png"
import phone from "../assets/images/phone.png"
import email from "../assets/images/email.png"


const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2281141b-329b-4cd6-af97-83a24006d955");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      
    }
  };


  return (
    <div className='contact'>
              <div className="contact-col">
                        <h2>Send Us A Message <img src={message} alt="message" /></h2>
                        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions is important to us. Thanks</p>
                        <ul>
                          <li><img src={meeting} alt="" /> Every Saturday of the week</li>
                          <li><img src={location} alt="" />Grange Park Garden Dudley, Uk</li>
                          <li><img src={phone} alt="" /> +44 7769 061 882</li>
                          <li><img src={email} alt="" />sundayobialoigbokwe@gmail.com</li>
                          
                        </ul>
                      </div>
                      <div className="contact-col">
                    <form  onSubmit={onSubmit} >
                      <label >Your Name</label>
                      <input 
                      type="text"
                      name="name"
                      placeholder='please enter your name'
                      required />
                      <label >Your Phone No</label>
                      <input 
                      type="tel"
                      name="phone"
                      placeholder='enter your phone number'
                      required />
                      <label >Write Your Message</label>
                      <textarea name="message"   
                       rows="10"
                       placeholder='write your message'
                       required></textarea>
                       <button type='submit' className='btn'>Submit Now</button>

                    </form>
                    <span>{result}</span>
                </div>
            </div>
  )
}

export default ContactUs