"use client";

import React, { useState } from 'react'; // Import useState from 'react'
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';


function ProjectsPage() {

  const projects = [{
    id: 1,
    subtitle: 'Subtitle 1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.'
  },{
    id: 2,
    subtitle: 'Subtitle 2',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.'
  },{
    id: 2,
    subtitle: 'Subtitle 2',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.'
  }
  ];

  const cardWidths = projects.map(() => `${Math.floor(Math.random() * 150) + 200}px`);

  const [selectedId, setSelectedId] = React.useState<number | null>(null);


  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((item, index) => (
        <motion.div
          key={item.id}
          layoutId={item.id.toString()}
          onClick={() => setSelectedId(item.id)}
          className='bg-white rounded-lg overflow-hidden shadow-lg text-black cursor-pointer'
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(255,165,0,0.5)' }}
          style={{ width: cardWidths[index], height: '150px' }}
        >
          <div className="p-4">
            <motion.h5 className="text-orange-500 font-bold mb-2">{item.subtitle}</motion.h5>
            <motion.h2 className="text-black text-lg font-bold mb-2">{item.title}</motion.h2>
          </div>
        </motion.div>
      ))}
      
      <AnimatePresence>
        {selectedId && (
          <motion.div
            key={selectedId}
            layoutId={selectedId.toString()}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)} // Clicking outside closes the detail view
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg p-8 max-w-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <motion.h5 className="text-orange-500 font-bold mb-2">{projects.find(p => p.id === selectedId)?.subtitle}</motion.h5>
              <motion.h2 className="text-black text-2xl font-bold mb-4">{projects.find(p => p.id === selectedId)?.title}</motion.h2>
              <motion.p className="text-gray-600">{projects.find(p => p.id === selectedId)?.description}</motion.p>
              <motion.button
                className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={() => setSelectedId(null)}
                whileHover={{ scale: 1.05 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    </div>
    
  )
}

export default ProjectsPage;