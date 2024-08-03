"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {

  const currentPath = usePathname();

  return (
    <motion.div className="bg-black"
      // initial={{opacity: 0}}
      // animate={{
      //     opacity: 1,
      //     transition: { delay:0, duration: 1, ease: 'easeInOut'}
      // }}
    >
        <div className='header-nav-bar mt-5 h-16 flex items-center mr-12'>
            <motion.a 
              href="/" 
              className='text-3xl text-white font-bold font-mono ml-8 md:ml-10 z-10 md:text-5xl lg:text-5xl'
              whileHover={{ scale: 1.1, 
                transition: { duration: 0.2 }
              }}
            >Alex<span className='text-orange-600 font-bold z-10'>.</span></motion.a>
            
            <Link className={`p-3 font-mono text-md ml-7 lg:ml-auto xl:ml-auto md:ml-24 z-10 md:text-lg ${currentPath === "/" ? "text-orange-600" : "text-white"}`} href="/">
              <motion.p 
                whileHover={{ scale: 1.2, 
                              color: '#fdba74',
                }}
              >Home</motion.p>
            </Link>
            
            <Link className={`p-3 font-mono text-md z-10 md:text-lg ${currentPath === "/projects" ? "text-orange-600" : "text-white"}`} href="/projects">
              <motion.p 
                whileHover={{ scale: 1.2, 
                  color: '#fdba74',
                }}
              >Projects</motion.p>
            </Link>
            
            <Link className={`p-3 font-mono text-md z-10 md:text-lg ${currentPath === "/contact" ? "text-orange-600" : "text-white"}`} href="/contact">
              <motion.p 
                whileHover={{ scale: 1.2, 
                  color: '#fdba74',
                }}
              >Contact</motion.p>
            </Link>
            
        </div>
    </motion.div>
  )
}

export default Header
