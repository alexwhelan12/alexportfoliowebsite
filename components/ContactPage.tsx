"use client";

import React from 'react'
import Header from './Header'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GlobeDemo } from './ui/GridGlobe'


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
      {(window.innerWidth > 768) ? <GlobeDemo/> : null}
      <motion.div className='absolute top-[8rem] xl:left-[15rem] z-10 2xl:left-[25rem]'
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: { delay:0, duration: 1.2, ease: 'easeInOut'}
        }}
      >
        <div className="contactsBody[background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] p-5 flex items-center justify-center xl:w-[50rem] sm:w-[30rem] sm:left-[4.5rem] md:left-[8rem] md:mt-0 absolute rounded-xl mt-10 border-orange-600 border">
          <section className='contact-page flex items-center justify-center'>
            <div className="contact-form flex flex-col items-center justify-center text-white">
              <h2 className='font-mono text-4xl p-5 text-white'>Contact Me</h2>
              <p className='text-lg font-mono text-slate-100 ml-5 w-[20rem] text-center'>Feel free to message me about any inquiries!</p>
              <form onSubmit={handleSubmit} className='mr-[300px] caret-black accent-black'>
                <div className="form-group p-5 w-52 h-20">
                  <input type="text" id="name" name="name" required className='rounded-md w-[500px] sm:w-[440px] sm:ml-[7.25rem] p-2 outline-non text-black outline-none ml-24' placeholder='Name'/>
                </div>
                <div className="form-group p-5 w-52 h-20">
                  <input type="email" id="email" name="email" required className='rounded-md w-[500px] sm:w-[440px] sm:ml-[7.25rem] p-2 outline-none text-black ml-24' placeholder='Email'/>
                </div>
                <div className="form-group p-5 w-52 h-20 mb-10">
                  <textarea id="message" name="message" required style={{"resize":"none"}} className='rounded-md w-[500px] sm:w-[440px] sm:ml-[7.25rem] h-[100px] outline-none text-black p-2 ml-24' placeholder='Message'/>
                </div>
                  <button type="submit" className="submit-button bg-orange-600 p-2 rounded-md mt-8 text-white sm:w-32 hover:bg-orange-500 ml-72 w-fit">Send</button>
              </form>
              {successMessage && <p className="success-message text-white mt-1 mr-1.5">Message sent successfully!</p>}
            </div>
          </section>
        </div>
      </motion.div>
    </>
  )
}

export default ContactPage