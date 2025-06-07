// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <section className="py-16 space-y-12">
//       <div className="flex flex-col items-center text-center">
//         <Image src="/images/profile1.png" alt="Prof. Abdullahi" width={96} height={96} className="rounded-full" />
//         <span className="mt-2 px-3 py-1 text-sm text-green-600 border border-green-600 rounded-full">Available to work</span>
//         <h1 className="text-4xl font-bold mt-4">I'm Prof. Abdullahi </h1>
//         <p className="text-lg mt-2 max-w-2xl text-gray-700">+20 years of experience. <span className="text-yellow-500 font-semibold">Accounting Consultant and Professor</span> in top Somali universities and ministries.</p>
//         <div className="mt-4 flex gap-3">
//           <Link href="/contact" className="btn">Contact Me</Link>
//           <a href="/resume.pdf" className="btn btn-outline" download>Download CV</a>
//         </div>
//       </div>


// <div id="experience" className="py-16">
//   <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
//     <span>💼</span> Work Experience
//   </h2>

//   <div className="border-l-2 border-yellow-400 pl-6 space-y-12">

//     {/* Trainer & Consultant */}
//     <div className="relative flex flex-col md:flex-row gap-6 ml-4">
//       <div className="absolute left-[-0.8rem] top-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow ml-[-0.9rem]"></div>

//       <div className="md:w-1/2">
//         <h3 className="text-yellow-600 font-semibold ">Trainer & Consultant</h3>
//         <p className="text-gray-500 dark:text-gray-400">Ministry of Energy and Water Resources</p>
//         <p className="text-sm text-gray-500 dark:text-gray-400">2020</p>
//       </div>
//       <div className="md:w-1/2">
//         <p className="text-gray-700 dark:text-gray-300">
//           Delivered nationwide public sector training in finance and accounting practices. 
//           Played a key role in capacity building for government staff in Somalia.
//         </p>
//       </div>
//     </div>

//     {/* Lecturer */}
//     <div className="relative flex flex-col md:flex-row gap-6 ml-4">
//       <div className="absolute left-[-0.8rem] top-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow ml-[-0.9rem]"></div>

//       <div className="md:w-1/2">
//         <h3 className="text-yellow-600 font-semibold">Lecturer</h3>
//         <p className="text-gray-500 dark:text-gray-400">Horseed & Plasma University</p>
//         <p className="text-sm text-gray-500 dark:text-gray-400">2014 – Present</p>
//       </div>
//       <div className="md:w-1/2">
//         <p className="text-gray-700 dark:text-gray-300">
//           Teaching undergraduate and postgraduate students in accounting, auditing, and project finance. 
//           Mentoring future professionals and supporting academic excellence.
//         </p>
//       </div>
//     </div>

//   </div>
// </div>


//       <div id="projects">
//         <h2 className="text-2xl font-semibold">Projects</h2>
//         <div className="grid gap-6 mt-4 md:grid-cols-2">
//           <div className="border p-4 rounded-md">
//             <Image src="/images/training.jpg" alt="Project 1" width={500} height={300} className="rounded" />
//             <h3 className="mt-2 font-semibold">Financial Audit Toolkit</h3>
//             <p>Tool to streamline audit reporting using Excel and Power BI.</p>
//           </div>
//           <div className="border p-4 rounded-md">
//             <Image src="/images/tool.jpg" alt="Project 2" width={500} height={300} className="rounded" />
//             <h3 className="mt-2 font-semibold">Training Platform</h3>
//             <p>Portal to train 500+ gov/NGO staff in Somalia.</p>
//           </div>
//         </div>
//       </div>



// <div id="about" className="py-16">
//   <h2 className="text-3xl font-bold mb-4">About me</h2>

//   <p className="mt-4 text-gray-700 dark:text-gray-300">
//     My journey in accounting began in the <span className="text-yellow-600">early 2000s</span> when I developed a strong interest in financial systems, auditing, and transparency. With a background in <span className="text-yellow-600">Business Administration and Finance</span>, I quickly established myself as a trusted expert in <span className="text-yellow-600">financial management</span>, compliance, and institutional capacity development across Somalia.
//   </p>

//   <p className="mt-4 text-gray-700 dark:text-gray-300">
//     Since <span className="text-yellow-600">2014</span>, I’ve had the privilege of lecturing at <span className="text-yellow-600">Horseed University</span> and <span className="text-yellow-600">Plasma University</span>, mentoring students in <span className="text-yellow-600">Accounting, Auditing, and Project Management</span>. I also led high-impact national training projects, including a successful engagement with the <span className="text-yellow-600">Ministry of Energy and Water Resources</span> in <span className="text-yellow-600">2020</span> to improve public financial accountability.
//   </p>

//   <p className="mt-4 text-gray-700 dark:text-gray-300">
//     My career highlights include developing professional training manuals, conducting over <span className="text-yellow-600">200+ workshops</span>, and mentoring dozens of financial officers now thriving in government and NGO roles. I’m driven by a belief in <span className="text-yellow-600">empowerment through education</span> and a commitment to building <span className="text-yellow-600">strong, transparent financial systems</span> that support development.
//   </p>
// </div>


//     </section>
//   );
// }



'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Download, Send, MapPin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <section className="py-16 space-y-12 px-4">
      <div className="flex flex-col items-center text-center">
        <Image src="/images/profile1.png" alt="Prof. Abdullahi" width={96} height={96} className="rounded-full" />
        <span className="mt-2 px-3 py-1 text-sm text-green-600 border border-green-600 rounded-full">Available to work</span>
        <h1 className="text-4xl font-bold mt-4">I'm Prof. Abdullahi</h1>
        <p className="text-lg mt-2 max-w-2xl text-gray-700 dark:text-gray-300">
          +20 years of experience. <span className="text-yellow-500 font-semibold">Accounting Consultant and Professor</span> in top Somali universities and ministries.
        </p>
        {/* <div className="mt-4 flex flex-wrap gap-3 justify-center ">
          <Link href="/contact" className="btn p-2 px-4   border-[1px] border-gray-300 rounded-full text-gray-600">Contact Me</Link>
          <a href="/resume.pdf" className="btn  p-2 px-4 border-[1px] border-gray-300 rounded-full text-gray-600" download>Download CV</a>
        </div> */}

<div className="mt-12 flex flex-wrap gap-3 justify-center">
  <Link
    href="#contact"
    className="btn p-2 px-4 flex items-center gap-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300"
  >
    <Mail size={16} />
    Contact Me
  </Link>

  <a
    href="/images/CV CARTAN.doc"
    className="btn p-2 px-4 flex items-center gap-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300"
    download
  >
    <Download size={16} />
    Download CV
  </a>
</div>
      </div>

      <div id="experience" className="py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span>💼</span> Work Experience
        </h2>
        <div className="border-l-2 border-yellow-400 pl-6 space-y-12">
          <div className="relative flex flex-col md:flex-row gap-6 ml-4">
            <div className="absolute left-[-0.8rem] top-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow ml-[-0.9rem]"></div>
            <div className="md:w-1/2">
              <h3 className="text-yellow-600 font-semibold">Trainer & Consultant</h3>
              <p className="text-gray-500 dark:text-gray-400">Ministry of Energy and Water Resources</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2020</p>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 dark:text-gray-300">
                Delivered nationwide public sector training in finance and accounting practices. Played a key role in capacity building for government staff in Somalia.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row gap-6 ml-4">
            <div className="absolute left-[-0.8rem] top-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow ml-[-0.9rem]"></div>
            <div className="md:w-1/2">
              <h3 className="text-yellow-600 font-semibold">Lecturer</h3>
              <p className="text-gray-500 dark:text-gray-400">Horseed & Plasma University</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2014 – Present</p>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 dark:text-gray-300">
                Teaching undergraduate and postgraduate students in accounting, auditing, and project finance. Mentoring future professionals and supporting academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="projects">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <div className="border p-4 rounded-md">
            <div className="relative w-full h-64 rounded overflow-hidden">
              <Image src="/images/training.jpg" alt="Project 1" fill className="object-cover" />
            </div>
            <h3 className="mt-2 font-semibold">Financial Audit Toolkit</h3>
            <p>Tool to streamline audit reporting using Excel and Power BI.</p>
          </div>
          <div className="border p-4 rounded-md">
            <div className="relative w-full h-64 rounded overflow-hidden">
              <Image src="/images/tool.jpg" alt="Project 2" fill className="object-cover" />
            </div>
            <h3 className="mt-2 font-semibold">Training Platform</h3>
            <p>Portal to train 500+ gov/NGO staff in Somalia.</p>
          </div>
        </div>
      </div>

      <div id="about" className="py-16">
        <h2 className="text-3xl font-bold mb-4">About me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          My journey in accounting began in the <span className="text-yellow-600">early 2000s</span> when I developed a strong interest in financial systems, auditing, and transparency. With a background in <span className="text-yellow-600">Business Administration and Finance</span>, I quickly established myself as a trusted expert in <span className="text-yellow-600">financial management</span>, compliance, and institutional capacity development across Somalia.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Since <span className="text-yellow-600">2014</span>, I’ve had the privilege of lecturing at <span className="text-yellow-600">Horseed University</span> and <span className="text-yellow-600">Plasma University</span>, mentoring students in <span className="text-yellow-600">Accounting, Auditing, and Project Management</span>. I also led high-impact national training projects, including a successful engagement with the <span className="text-yellow-600">Ministry of Energy and Water Resources</span> in <span className="text-yellow-600">2020</span> to improve public financial accountability.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          My career highlights include developing professional training manuals, conducting over <span className="text-yellow-600">200+ workshops</span>, and mentoring dozens of financial officers now thriving in government and NGO roles. I’m driven by a belief in <span className="text-yellow-600">empowerment through education</span> and a commitment to building <span className="text-yellow-600">strong, transparent financial systems</span> that support development.
        </p>
      </div>

      <div id="contact" className="py-16 px-4 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto ">
        <h2 className="text-3xl font-bold mb-6 text-center">📬 Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-8 md:text-center">
          Interested in working together or have any questions? I'd love to hear from you. Reach out anytime.
        </p>

        <div className="flex flex-col gap-6 items-start sm:items-center sm:flex-row sm:justify-around text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <Mail className="text-yellow-500" size={20} />
            <span>cartan3520@gmail.com </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-yellow-500" size={20} />
            <span>+252-615514516</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-yellow-500" size={20} />
            <span>Mogadishu, Somalia</span>
          </div>
        </div>

        <form className="mt-12 space-y-4 max-w-xl mx-auto text-left" action="https://formspree.io/f/movawkkq" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded dark:text-black" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded dark:text-black" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
            <textarea id="message" rows={5} className="w-full p-2 border rounded dark:text-black" required></textarea>
          </div>
          <button type="submit" className="mt-4 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded">
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </div>
    </section>

    
  );
}

