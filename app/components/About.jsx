import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`w-full px-[12%] py-16 scroll-mt-20 transition-colors duration-500 
      ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-950 to-black"
          : "bg-gradient-to-b from-orange-50 via-pink-50 to-white"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h4 className="uppercase text-sm tracking-[6px] text-gray-500 dark:text-gray-400">
          Introduction
        </h4>
        <h2 className="text-5xl sm:text-6xl font-extrabold font-Ovo text-gray-900 dark:text-white mt-3">
          About Me
        </h2>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20">
        {/* Image Side */}
        <div className="relative group">
          <div className="w-72 sm:w-80 aspect-square rounded-3xl bg-gradient-to-tr from-pink-500 via-orange-400 to-yellow-400 p-[4px] shadow-2xl">
            <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-900 overflow-hidden">
              <Image
                src={assets.akhilprofile}
                alt="user"
                className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* Glow */}
          <div className="absolute -inset-5 bg-gradient-to-r from-pink-400/30 to-yellow-400/30 blur-3xl rounded-full -z-10 opacity-70"></div>
        </div>

        {/* Info Side */}
        <div className="flex-1">
         <p className="mb-12 max-w-2xl text-lg leading-relaxed tracking-wide text-gray-700 dark:text-gray-300">
  Full-stack MERN developer passionate about building scalable web and mobile applications. 
  Skilled in React, Node.js, Express, and MongoDB, with a strong focus on clean architecture, 
  responsive UI design, and performance optimization. I enjoy turning ideas into interactive 
  digital experiences and constantly exploring new technologies to deliver efficient and 
  impactful solutions.
</p>


          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 
                bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg 
                hover:-translate-y-2 hover:shadow-xl
                hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50
                dark:hover:from-purple-900/40 dark:hover:to-pink-900/40"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-8 h-8 mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <h4 className="mt-12 mb-6 text-xl font-semibold text-gray-900 dark:text-white">
            Tools I Use
          </h4>
          <div className="flex flex-wrap items-center gap-5">
            {toolsData.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-14 h-14 rounded-full 
                bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 
                cursor-pointer transition-all duration-300
                hover:scale-110 hover:rotate-6 
                hover:shadow-lg hover:bg-gradient-to-br hover:from-orange-100 hover:to-pink-100
                dark:hover:from-purple-900/50 dark:hover:to-pink-900/50"
              >
                <Image src={tool} alt="Tool" className="w-7 h-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
