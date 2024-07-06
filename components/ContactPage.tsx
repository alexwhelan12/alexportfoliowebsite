"use client";

import React from 'react'
import Header from './Header'
import { useState, useEffect } from 'react'
import motion from 'framer-motion'

function ContactPage() {

  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.append("access_key", "72194b2d-7936-496e-9efa-1380b6a695ab");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccessMessage(true);
    }
  };

  return (
   
    <>
      <Header/>
      <div className="contactsBody bg-gradient-to-r from-orange-600 to-blue-500 p-5 flex items-center justify-center ">
        <section className='contact-page flex items-center justify-center mt-16'>
          <div className="contact-form flex flex-col items-center justify-center text-white">
            <h2 className='font-mono text-4xl p-5 text-orange-600'>Contact Me</h2>
            <p className='text-xl font-mono text-orange-400 ml-5'>Feel free to message me about any inquiries!</p>
            <form onSubmit={handleSubmit} className='mr-[300px] caret-orange-600 accent-black'>
              <div className="form-group p-5 w-52 h-20">
                <input type="text" id="name" name="name" required className='rounded-md w-[500px] p-2 outline-non text-black outline-none' placeholder='Name'/>
              </div>
              <div className="form-group p-5 w-52 h-20">
                <input type="email" id="email" name="email" required className='rounded-md w-[500px] p-2 outline-none text-black' placeholder='Email'/>
              </div>
              <div className="form-group p-5 w-52 h-20 mb-10">
                <textarea id="message" name="message" required style={{"resize":"none"}} className='rounded-md w-[500px] h-[100px] outline-none text-black p-2' placeholder='Message'/>
              </div>
                <button type="submit" className="submit-button bg-orange-600 p-2 rounded-md mt-12 text-white hover:scale-110">Send Message</button>
            </form>
            {/* {successMessage && <p className="success-message" style={{"paddingLeft":"160px", "fontSize": "20px", "zIndex": "100"}}>Message sent successfully!</p>} */}
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage