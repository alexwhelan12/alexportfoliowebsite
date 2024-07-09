"use client";

import React, { useState } from 'react'; // Import useState from 'react'
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import projects from '@/app/data/projects';


function ProjectsPage() {


  return (
    <section>
      <Header />
      <VerticalTimeline>
        {projects.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement visible={true}>
              <h3 className="text-red-500">{experience.title}</h3>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default ProjectsPage;