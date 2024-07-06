"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Header() {
  return (
    <motion.div className="bg-black"
      initial={{opacity: 0}}
      animate={{
          opacity: 1,
          transition: { delay:0, duration: 1, ease: 'easeInOut'}
      }}
    >
        <div className='header-nav-bar m-5 h-16 flex items-center'>
            <a href="/" className='text-3xl text-white font-bold font-mono ml-10'>Alex<span className='text-orange-600 font-bold'>.</span></a>
            
            <Link className='text-white ml-auto p-5 font-mono' href="/">
              <motion.p 
                whileHover={{ scale: 1.2, 
                              color: '#FFA500',
                }}
              >Home</motion.p>
            </Link>
            
            <Link className='text-white p-5 font-mono'  href="/projects">
              <motion.p 
                whileHover={{ scale: 1.2, 
                  color: '#FFA500',
                }}
              >Projects</motion.p>
            </Link>
            
            <Link className='text-white p-5 font-mono mr-10' href="/contact">
              <motion.p 
                whileHover={{ scale: 1.2, 
                  color: '#FFA500',
                }}
              >Contact</motion.p>
            </Link>
            
        </div>
    </motion.div>
  )
}

export default Header
