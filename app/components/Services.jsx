import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-20 
      bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950"
    >
      {/* Headings */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400 tracking-[6px] uppercase">
        What I Offer
      </h4>
      <h2 className="text-center text-5xl sm:text-6xl font-extrabold font-Ovo 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        dark:from-indigo-300 dark:via-purple-400 dark:to-pink-400">
        My Services
      </h2>

      {/* Subtitle */}
      <p className="text-center max-w-2xl mx-auto mt-6 mb-16 text-gray-700 dark:text-gray-300 font-Ovo text-lg leading-relaxed">
        I specialize in building modern, scalable, and user-friendly solutions. 
        My services are designed to help you grow digitally with speed, style, and efficiency.
      </p>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            key={index}
            className="group relative rounded-2xl p-8 cursor-pointer overflow-hidden
            border border-gray-200 dark:border-gray-700 
            bg-white/70 dark:bg-gray-800/50 backdrop-blur-xl 
            shadow-lg hover:shadow-2xl 
            hover:border-indigo-400 dark:hover:border-indigo-300 
            transition-all duration-300"
          >
            {/* Glow background on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
            bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-2xl" />

            {/* Content */}
            <div className="relative z-10">
              <Image src={icon} alt={title} className="w-12 h-12 mb-5" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {description}
              </p>
              <a
                href={link}
                className="flex items-center gap-2 text-sm mt-6 
                text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline"
              >
                Read more{" "}
                <Image
                  src={assets.right_arrow}
                  alt=""
                  className="w-4 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
