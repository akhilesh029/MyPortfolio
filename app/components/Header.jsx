import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* 🎨 Background (different for light/dark) */}
      <div className="absolute inset-0 -z-10 animate-gradient-slow 
        bg-gradient-to-br from-white via-gray-100 to-blue-100 
        dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-black">
      </div>

      {/* ✨ Soft radial glow behind image */}
      <div className="absolute top-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-300/40 to-purple-300/40 dark:from-purple-900/30 dark:to-indigo-900/30 blur-3xl -z-10"></div>
      
      {/* 🌟 Profile Image with Glassmorphism */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [ -10, 10, -10 ] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative p-1 rounded-full bg-white/30 backdrop-blur-lg shadow-xl shadow-purple-500/30 dark:bg-white/10"
      >
        <Image
          src={assets.profile_img}
          alt="Profile picture"
          className="rounded-full w-36 border-4 border-white/30 shadow-lg"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 blur-2xl -z-10"></div>
      </motion.div>

      {/* 👋 Intro */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 flex items-center gap-2 justify-center text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-100"
      >
        Hi! I'm Akhilesh{" "}
        <span className="inline-flex animate-wave">
          <Image src={assets.hand_icon} alt="Hand waving" className="w-6" />
        </span>
      </motion.h3>

      {/* 🌈 Gradient Typing Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-extrabold 
        bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 
        dark:from-white dark:via-purple-300 dark:to-white 
        bg-clip-text text-transparent animate-typing border-r-4 border-r-gray-900 dark:border-r-white pr-2"
      >
        Full-Stack Web Developer
      </motion.h1>

      {/* 💡 Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-gray-300 text-lg"
      >
        Crafting modern, interactive, and elegant digital experiences with code ✨
      </motion.p>

      {/* 🎯 Fancy Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
        
        {/* Contact Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="relative group px-10 py-3 rounded-full bg-black text-white 
          dark:bg-white dark:text-black 
          border border-white/20 dark:border-gray-800 
          shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40"
        >
          <span className="relative z-10 flex items-center gap-2">
            Contact me{" "}
            <Image src={assets.right_arrow_white} alt="Arrow icon" className="w-4 invert dark:invert-0" />
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition duration-300 blur-md"></div>
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Akhileshresume.pdf"
          download
          className="relative group px-10 py-3 rounded-full bg-white text-black 
          dark:bg-gray-900 dark:text-white 
          border border-gray-200 dark:border-gray-700 
          shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40"
        >
          <span className="relative z-10 flex items-center gap-2">
            My Resume{""}
            <Image src={assets.download_icon} alt="Download icon" className="w-4" />
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-300 blur-md"></div>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
