"use client";

import React, { useState } from 'react'; // Import useState from 'react'
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import projects from '@/app/data/projects';
import { WobbleCard } from './ui/wobble-card';
import Image from 'next/image';
import { AnimatedTooltip } from './ui/animated-tooltip';



function ProjectsPage() {


  return (
    <section>
      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[90rem] w-full h-full absolute top-[10rem] left-[15rem]'>
        {projects.map((project, index) => (
          <WobbleCard key={index} className="m-5 p-5">
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
              {/* <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              /> */}
          </WobbleCard>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage;