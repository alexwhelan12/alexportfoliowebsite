"use client";

import React, { useState } from 'react'; // Import useState from 'react'
import Header from './Header';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import projects from '@/app/data/projects';
import { WobbleCard } from './ui/wobble-card';
import Image from 'next/image';
import { AnimatedTooltip } from './ui/animated-tooltip';
import Link from 'next/link';



function ProjectsPage() {


  return (
    <section>
      <Header />
      <motion.div className='grid grid-cols-1 xl:grid-cols-3 gap-4 max-w-[90rem] w-full h-[70rem] absolute top-[10rem] left-[15rem] xl:w-[80rem] lg:left-[7.5rem]'
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: { delay:0, duration: 0.8, ease: 'easeInOut'}
        }}
      >
        {projects.map((project, index) => (
          <WobbleCard key={index} className="m-5 p-5 col-span-3">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white font-mono">
                  {project.title}
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200 font-mono">
                  {project.description}
                </p>
                <div className='flex flex-row gap-5 mt-3'>
                  <AnimatedTooltip items={project.techStack || [] } />
                </div>
              </div>
              {project.link && <motion.a className='text-white z-10 absolute top-[23rem] bg-[#062056] p-2 rounded-lg font-mono mt-2' 
                  href={project.link} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.1, 
                    transition: { duration: 0.2 }
                  }}
                  >Preview</motion.a>}
              <Image
                src={project.image}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl -z-10"
              />
          </WobbleCard>
        ))}
      </motion.div>
    </section>
  )
}

export default ProjectsPage;