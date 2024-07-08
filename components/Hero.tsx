"use client";

import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { motion, useAnimate } from 'framer-motion'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Spotlight } from './ui/Spotlight'
import { IoCopyOutline } from 'react-icons/io5';
import { BiDownload } from 'react-icons/bi';

const Hero = () => {

    const [scope, animate] = useAnimate();

    return (
        <div className='flex items-center justify-center'>
            <div className=''>
                <Spotlight fill='white' className='top-[6rem] left-80 h-[80vh] w-[50vw]'/>
                <Spotlight fill='orange' className='-top-40 -left-10'/>
                <Spotlight fill='orange' className='-top-40 -left-10'/>
                <Spotlight fill='orange' className='top-32 left-full h-[80vh] w-[50vw]'/>
                {/* <Spotlight fill='orange' className='top-32 right-10 h-[80vh] w-[50vw]'/> */}
            </div>
            
            <div className='font-mono text-5xl flex flex-col justify-center items-left absolute top-60 left-[30rem]'>
                <motion.div className='mt-0'
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay:0, duration: 1, ease: 'easeInOut'}
                    }}
                ><span className='text-base text-white'>Software Engineering Student</span></motion.div>
                
                <TextGenerateEffect words='Hello, I&apos;m' color='white'/>  
                <TextGenerateEffect words='Alex Whelan' extraStyles='mb-3' color="orange"/>
                <motion.div 
                    className='w-96 h-20 mt-3 p-5 pl-0'
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay:0, duration: 1, ease: 'easeInOut'}
                    }}
                >
                    <p className='text-base leading-5 text-white overflow-auto'>I&apos;m a third year software engineering student at the <span className='text-orange-600'>University of Calgary</span>. I have a big interest in <span className='text-orange-600'>fullstack development</span> and web-development in general. I&apos;m currently looking for Software Engineering internships for May 2025.</p>   
                </motion.div>
        
                <motion.a className='text-white text-base bg-orange-600 rounded-md p-2 flex flex-row gap-1 items-center w-fit mt-24' href='/'
                    whileHover={{ scale: 1.1, 
                        transition: { duration: 0.2 }
                    }}
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay:0, duration: 1, ease: 'easeInOut'}
                    }}
                >
                    Download CV

                <BiDownload />
                </motion.a>

                <div className='flex items-center space-x-4 ml-40 mt-[-42px]'>
                    <motion.a 
                    href="https://github.com/alexwhelan12" 
                    target='_blank'
                    className='bg-orange-600 rounded-full p-2 flex items-center justify-center w-12 h-12' 
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }}
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay:0, duration: 1, ease: 'easeInOut'}
                    }}
                    >
                        <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                            <title>GitHub</title>
                            <path d="M12 .296C5.376.296 0 5.667 0 12.335c0 5.303 3.438 9.802 8.205 11.388.599.112.82-.257.82-.577v-2.041c-3.338.729-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.729.083-.729 1.204.085 1.835 1.253 1.835 1.253 1.07 1.837 2.807 1.306 3.492.998.108-.777.419-1.307.762-1.607-2.665-.305-5.467-1.33-5.467-5.93 0-1.31.469-2.381 1.235-3.222-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.982-.399 3.003-.403 1.02.004 2.045.137 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.118 3.176.77.841 1.235 1.912 1.235 3.222 0 4.61-2.807 5.621-5.479 5.92.43.37.815 1.096.815 2.213v3.284c0 .324.219.694.824.576 4.767-1.587 8.201-6.084 8.201-11.388 0-6.668-5.373-12.039-12-12.039z"/>
                        </svg>
                    </motion.a>
                    <motion.a 
                    href="https://www.linkedin.com/in/alex-whelan-791ab8286/" 
                    target='_blank'
                    className='bg-orange-600 rounded-full p-2 flex items-center justify-center w-12 h-12' 
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }}
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay:0, duration: 1, ease: 'easeInOut'}
                    }}
                    >
                        <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                            <title>LinkedIn</title>
                            <path d="M20.447 20.452h-3.555V14.845c0-1.34-.024-3.066-1.872-3.066-1.873 0-2.159 1.462-2.159 2.974v5.699H9.309V9.358h3.413v1.516h.049c.475-.9 1.636-1.848 3.37-1.848 3.602 0 4.267 2.372 4.267 5.455v6.971zM5.337 7.433a2.073 2.073 0 1 1 0-4.146 2.073 2.073 0 0 1 0 4.146zm1.776 13.019H3.563V9.358h3.55v11.094zM22.225 0H1.771C.792 0 0 .775 0 1.733v20.531C0 23.226.792 24 1.771 24h20.451C23.205 24 24 23.226 24 22.264V1.733C24 .775 23.205 0 22.225 0z"/>
                        </svg>
                    </motion.a>
                </div>
            </div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{
                            opacity: 1,
                            transition: { delay:0, duration: 0.7, ease: 'easeInOut'},
                            textShadow: '0px 0px 10px #fffff',
                            shadow: '0px 0px 10px #fffff'
                        }}
                        className='inset-0 flex items-center'
                    >
                    <Image
                        src='/images/HeadShot.png'
                        alt="portfolio-photo"
                        width={500}
                        height={500}
                        className='rounded-full w-80 absolute top-[17.5rem] right-[32.5rem]'
                    />
                    </motion.div>

                    <motion.svg
                        className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] absolute top-60 right-[30rem]"
                        fill="transparent"
                        viewBox={`0 0 506 506`}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#EA580C"
                            strokeWidth="8"
                            strokeLinejoin="round"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                strokeDasharray: ["15 120 25 2", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    </motion.svg>

                    {/* ADD in accenturnity UI globe to background!!! */}
        </div>
    )
}

export default Hero
