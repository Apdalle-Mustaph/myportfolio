'use client';

import React, { JSX, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { motion } from 'framer-motion';




export default function Home() {
  const [isOpen, setIsOpen] = useState(false);


  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      {/* Hero Section */}
      <section id='about' className="py-20 px-6 md:px-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <p className="text-sm mb-2 text-gray-600">Hi, I'm</p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black via-gray-900 to-gray-500 text-transparent bg-clip-text">
            Abdalla Mustaf
          </h2>

          <div className="flex justify-center mt-6">
            <Image
              src="/images/apdalle.jpg"
              alt="Abdalla Mustaf"
              width={160}
              height={100}
              className="rounded-full"
            />
          </div>

          <TypeAnimation
            sequence={[
              'Mobile App Developer...',
              2000,
              'Frontend Specialist...',
              2000,
              'Backend Problem Solver...',
              2000,
              'UI/UX Enthusiast...',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block mt-6 text-lg md:text-xl font-medium text-gray-600"
          />

<p className="text-gray-600 dark:text-gray-300 mt-6">
  I'm a versatile Web and Mobile App Developer with hands-on experience in both frontend and backend development. With a strong background in Computer Science, I also specialize in Network Engineering, Cybersecurity, and IoT systems. As a dedicated team leader and problem-solver, I’m passionate about building secure, scalable, and impactful digital solutions that connect technology with real-world needs.
</p>



          
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id='skills' className="py-20 px-6 bg-[#0f172a] text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            {[
              'Full-Stack Development',
              'React & React Native',
              'Node.js & Express',
              'Next.js',
              'MongoDB & PostgreSQL',
              'REST APIs & GraphQL',
              'IoT Systems',
              'Network Engineering',
              'Cybersecurity',
              'Ethical Hacking',
              'Linux & Server Management',
              'Docker & CI/CD',
              'Team Leadership',
              'System Design',
              'Agile & DevOps',
              'Python',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 hover:bg-gray-600 transition-all px-4 py-2 rounded-xl cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id='project' className="px-6 py-20 bg-white text-black text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">🚀 Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Smart Glass IoT',
                desc: 'An intelligent glass system powered by IoT for adaptive transparency, smart tinting, and environmental monitoring — all controlled via a cloud-based dashboard.',
                tech: ['NodeMCU', 'MQTT', 'React'],
                img: '/images/smartg.jpg',
              },
              
              {
                title: 'CyberToolkit',
                desc: 'Suite of penetration testing tools for local networks with real-time threat alerts.',
                tech: ['Python', 'Wireshark', 'Linux'],
                img: '/images/close-up-image-programer-working-his-desk-office.jpg',
              },
              {
                title: 'DevOps Dash',
                desc: 'A developer dashboard for monitoring deployments, builds, and logs.',
                tech: ['Docker', 'Next.js', 'GraphQL'],
                img: '/images/devO.png',
              },
              {
                title: 'MobiMart',
                desc: 'Cross-platform mobile eCommerce app with real-time chat and order tracking.',
                tech: ['React Native', 'Supabase', 'Stripe'],
                img: '/images/mobilee.png',
              },
              {
                title: 'NetAnalyzer',
                desc: 'Network analysis tool that scans, maps, and monitors local and cloud systems.',
                tech: ['Nmap', 'Node.js', 'GraphQL'],
                img: '/images/neta.png',
              },
              {
                title: 'TeamLeadBoard',
                desc: 'A task and communication board built for team leaders managing remote teams.',
                tech: ['Vue.js', 'Firebase', 'Agile'],
                img: '/images/notes-cork.jpg',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="border p-4 rounded-xl shadow-md hover:shadow-lg transition"
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
              >
                <img src={project.img} alt={project.title} className="rounded mb-4 w-full h-48 object-cover" />
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm mt-2">{project.desc}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm text-gray-600">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

            {/* Contact Section */}
    

    <section id='contact' className="px-6 py-24 bg-[#0f172a]  dark:bg-gray-900 text-center">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className="max-w-xl mx-auto"
  >
    <h2 className="text-4xl font-extrabold mb-4 text-white dark:text-white">
      Get in Touch
    </h2>
    <p className="text-lg text-white dark:text-gray-400 mb-8">
      I'm open to freelance, full-time roles, or collaborative side projects.
      Let's build something great together.
    </p>

    <div className="mb-8">
      <a
        href="mailto:your.email@example.com"
        className="text-lg font-medium text-white hover:text-gray-800 dark:hover:text-violet-400 transition"
      >
        cabdullaahimm@st.snu.edu.so
      </a>
    </div>

    <div className="flex justify-center gap-4 text-2xl">
      <a
        href="https://github.com/Apdalle-Mustaph"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white dark:text-gray-400 hover:text-black dark:hover:text-white transition"
      >
        <i className="fab fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/apdalle-mustaph-b73a60370/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white dark:text-gray-400 hover:text-blue-700 transition"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="https://twitter.com/ApdalleMustaph"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-white dark:text-gray-400 hover:text-sky-500 transition"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-white dark:text-gray-400 hover:text-blue-600 transition"
      >
        <i className="fab fa-facebook" />
      </a>
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-white dark:text-gray-400 hover:text-pink-500 transition"
      >
        <i className="fab fa-instagram" />
      </a>
    </div>
  </motion.div>
</section>

    </main>
  );
}