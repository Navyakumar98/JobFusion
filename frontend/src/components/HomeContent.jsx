import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Find your dream job</span>
              <span className="block text-blue-600">with JobFusion</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Your all-in-one platform for resume analysis, job recommendations, and recruiter automation.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:mx-0">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <img className="w-full" src="https://i.ibb.co/p34g1Yc/undraw-Job-hunt-re-q203.png" alt="Job hunt illustration" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
