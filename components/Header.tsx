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
        <div className='header-nav-bar mt-5 h-16 flex items-center'>
            <motion.a 
              href="/" 
              className='text-5xl text-white font-bold font-mono ml-10'
              whileHover={{ scale: 1.1, 
                transition: { duration: 0.2 }
              }}
            >Alex<span className='text-orange-600 font-bold'>.</span></motion.a>
            
            <Link className='text-white ml-auto p-5 font-mono text-xl' href="/">
              <motion.p 
                whileHover={{ scale: 1.2, 
                              color: '#FFA500',
                }}
              >Home</motion.p>
            </Link>
            
            <Link className='text-white p-5 font-mono text-xl'  href="/projects">
              <motion.p 
                whileHover={{ scale: 1.2, 
                  color: '#FFA500',
                }}
              >Projects</motion.p>
            </Link>
            
            <Link className='text-white p-5 font-mono mr-10 text-xl' href="/contact">
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
