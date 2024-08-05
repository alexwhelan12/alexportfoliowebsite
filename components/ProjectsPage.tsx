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
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[90rem] w-full absolute top-[10rem] left-[15rem] xl:w-[80rem] xl:left-[7rem] lg:w-[60rem] lg:left-[5.75rem] md:w-[35rem] md:m-1 md:left-[2.25rem] sm:w-[30rem] sm:left-[5rem] 2xl:left-[14.5rem] 2xl:w-[100rem]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.8, ease: 'easeInOut' },
      }}>
  {projects.map((project, index) => (
    <WobbleCard
      key={index}
      className="m-5 p-5 col-span-1 relative aspect-square flex flex-col justify-between w-full md:h-[25rem] lg:w-[28rem] xl:h-[28rem"
    >
      <div className="h-full flex flex-col justify-between md:w-[15rem]">
        <div>
          <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white font-mono">
            {project.title}
          </h2>
          <p className={`${index === 0 ? "xl:mt-1" : ""} mt-1 text-left text-base/6 text-black font-mono font-bold bg-white rounded-lg bg-opacity-50 p-2`}>
            {project.description}
          </p>
        </div>
        <div className={`flex flex-row gap-5 mt-3 absolute md:top-[13rem] 
          ${index === 0 ?"xl:top-[21rem] xl:left-[2rem]" : index === 2 ? "xl:top-[20rem]": "xl:top-[19rem]" } sm:top-[8rem] sm:left-[2rem]`}
          
          >
          <AnimatedTooltip items={project.techStack || []}/>
        </div>
      </div>
      {project.link && (
        <motion.a
          className={`${index === 0 ? "xl:bottom-[0rem] xl:left-[14rem]" : "xl:bottom-[1rem]"} text-white z-10 absolute bottom-5 bg-[#062056] p-2 rounded-lg font-mono md:bottom-[4.5rem] xl:left-8 sm:left-8 sm:bottom-[17rem]`}
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
      {project.image && (
        <Image
        src={project.image}
        width={500}
        height={500}
        alt="linear demo image"
        className={`absolute -right-4 lg:-right-[40%] md:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl -z-10 md:opacity-65 sm:-right-[20%] sm:-bottom-[1.5rem] ${index === 1 ? "sm:-bottom-[5.5rem] sm:-right-[8rem]" : ""}`}
      />
      )}
    </WobbleCard>
  ))}
</motion.div>


    </section>
  )
}

export default ProjectsPage;