import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-24 border-t border-gray-300 dark:border-gray-700 pt-10">
      {/* Logo Text + Email */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent cursor-pointer transition-transform duration-300 hover:scale-105">
          akhil.dev
        </h1>

        <div className="w-max flex items-center gap-3 mx-auto text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors mt-4">
          <Image src={assets.mail_icon} alt="Mail" className="w-6" />
          <a href="mailto:akhilesheka0100@gmail.com" className="font-medium">
            akhilesheka0100@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center sm:flex items-center justify-between mx-[10%] py-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2025 <span className="font-semibold text-gray-800 dark:text-white">Akhil&Com</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0 text-gray-600 dark:text-gray-300">
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition-colors font-medium"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors font-medium"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
