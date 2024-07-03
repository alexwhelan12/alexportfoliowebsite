import React from 'react'
import { motion } from 'framer-motion'

function Header() {
  return (
    <div className="bg-black">
        <div className='header-nav-bar m-5 h-16 flex items-center'>
            <a href="/" className='text-3xl text-white font-bold font-mono ml-10'>Alex<span className='text-orange-600 font-bold'>.</span></a>
            <motion.a className='text-white ml-auto p-5 font-mono' href='/'
              whileHover={{ scale: 1.2, 
                            color: '#FFA500',
              }}
            >Home</motion.a>
            <motion.a className='text-white p-5 font-mono' href='/'
               whileHover={{ scale: 1.2, 
                color: '#FFA500',
              }}
            >Projects</motion.a>
            <motion.a className='text-white p-5 font-mono mr-10' href='/'
               whileHover={{ scale: 1.2, 
                color: '#FFA500',
              }}
            >Contact</motion.a>
        </div>
    </div>
  )
}

export default Header
