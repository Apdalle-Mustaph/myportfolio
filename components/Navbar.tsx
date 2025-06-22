// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import DarkModeToggle from './DarkModeToggle';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="py-4 px-6 flex flex-col md:flex-row md:justify-center md:items-center font-inter">
//   {/* Mobile menu toggle button */}
//   <div className="flex justify-end items-center md:hidden mb-4">
//     <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
//       {isOpen ? <X size={24} /> : <Menu size={24} />}
//     </button>
//   </div>
// <div className={`flex flex-col md:flex-row items-start md:items-center  space-y-4 md:space-y-0 md:space-x-8 text-base font-medium ${isOpen ? 'flex' : 'hidden'} md:flex`}>
//   <a href="#about" onClick={() => setIsOpen(false)}>About</a>
//   <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
//   <a href="#project" onClick={() => setIsOpen(false)}>Project</a>
//   <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
// </div>

// </nav>


//   );
// }

'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="py-4 px-6 flex flex-col md:flex-row md:justify-center md:items-center font-inter"
    >
      {/* Mobile menu toggle button */}
      <div className="flex justify-end items-center md:hidden mb-4 w-full">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-base font-medium ${
          isOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#project" onClick={() => setIsOpen(false)}>Project</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </motion.nav>
  );
}
