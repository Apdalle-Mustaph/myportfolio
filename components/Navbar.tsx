'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 flex flex-col md:flex-row md:justify-center md:items-center font-inter">
  {/* Mobile menu toggle button */}
  <div className="flex justify-between items-center md:hidden mb-4">
    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
<div className={`flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-base font-medium ${isOpen ? 'flex' : 'hidden'} md:flex`}>
  <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
  <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
  <a href="#about" onClick={() => setIsOpen(false)}>About</a>
  <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
  <DarkModeToggle />
</div>

</nav>

  );
}

