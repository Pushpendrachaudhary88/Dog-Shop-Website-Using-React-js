import React from 'react'
import "./Contact.css"
// import { Input } from 'postcss';

export const Contact  = () => {
  return (
    <div>
      <div className='contact'>
        <div className='contact-1'>
          <h1>Contact US Dog Registry</h1>
          <p>If you have other questions we weren't able to address here,<br/> feel free to contact us!</p>
          <button>Registration</button>
        </div>

        <div className='contact-2'>
          <h1>Have questions?</h1>
          <p>Please review our FAQ page for common questions and answers.</p>

          <h2>Your Name</h2>
          <input type='text' placeholder='Enter Your Name'/>

          <h2>Your Email</h2>
          <input type='email' placeholder='Enter Your Email'/>

          <h2>Your Number</h2>
          <input type='number' placeholder='Enter Your NUmber'/>


          <h2>Old Number</h2>
          <input type='number' placeholder='Enter Your NUmber'/>


          <h2>Message</h2>
          <input type='text' placeholder='Enter Your Message' className='msgbox'/>

          <br />

          <button>Send Message</button>




        </div>
      </div>

    </div>
  )
}
export default Contact;
