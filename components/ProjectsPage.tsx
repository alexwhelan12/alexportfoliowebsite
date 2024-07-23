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
      <motion.div
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[90rem] w-full absolute top-[10rem] left-[15rem] xl:w-[80rem] lg:left-[7.5rem] md:left-5 md:w-[45rem] md:m-1 sm:w-[30rem] sm:left-[5.5rem]"
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 0, duration: 0.8, ease: 'easeInOut' },
  }}
>
  {projects.map((project, index) => (
    <WobbleCard
      key={index}
      className="m-5 p-5 col-span-1 relative aspect-square flex flex-col justify-between w-full md:h-[25rem] lg:w-[28rem] xl:h-[28rem]"
    >
      <div className="h-full flex flex-col justify-between md:w-[15rem]">
        <div>
          <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white font-mono">
            {project.title}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200 font-mono">
            {project.description}
          </p>
        </div>
        <div className={`flex flex-row gap-5 mt-3 absolute md:top-[13rem] 
          ${index === 0 ?"xl:top-[19.5rem]" : "xl:top-[18rem]" } sm:top-[8rem] sm:left-[2rem]`}
          
          >
          <AnimatedTooltip items={project.techStack || []}/>
        </div>
      </div>
      {project.link && (
        <motion.a
          className="text-white z-10 absolute bottom-5 left-1/2 transform -translate-x-1/2 
          bg-[#062056] p-2 rounded-lg font-mono md:left-20 md:bottom-[4.5rem] xl:bottom-[1rem] sm:left-[4.5rem] sm:bottom-[17rem]"
          href={project.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        >
          Preview
        </motion.a>
      )}
      <Image
        src={project.image}
        width={500}
        height={500}
        alt="linear demo image"
        className={`absolute -right-4 lg:-right-[40%] md:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl -z-10 md:opacity-85 sm:-right-[20%] sm:-bottom-[1.5rem] ${index === 1 ? "sm:-bottom-[5.5rem] sm:-right-[8rem]" : ""}`}
      />
    </WobbleCard>
  ))}
</motion.div>


    </section>
  )
}

export default ProjectsPage;