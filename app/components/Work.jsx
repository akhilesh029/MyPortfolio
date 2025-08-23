import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-20 scroll-mt-20">
      {/* Section Heading */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300 tracking-wide uppercase">
        My Portfolio
      </h4>

      <h2 className="text-center text-5xl font-Ovo font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-300 dark:via-purple-400 dark:to-pink-400">
        My Latest Work
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-6 mb-16 text-gray-600 dark:text-gray-400 font-Ovo text-lg leading-relaxed">
        A showcase of my most recent projects — from stunning UI designs and
        frontend magic to complete full-stack digital solutions.
      </p>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {workData.map((work, index) => (
          <motion.a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg shadow-lg cursor-pointer hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-300 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={work.bgImage}
                alt={work.title}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Floating Title */}
              <h2 className="absolute bottom-5 left-5 text-xl font-semibold text-white opacity-100 group-hover:translate-y-[-6px] transition-transform duration-300 drop-shadow-lg">
                {work.title}
              </h2>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {work.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">
                Visit Project
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-4 inline-block group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Show More Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-14 w-max flex items-center justify-center gap-2 text-white font-Ovo text-sm py-3 px-10 mx-auto rounded-full shadow-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-500 dark:to-pink-500 hover:opacity-90 transition-all duration-500"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
    </div>
  );
};

export default Work;
