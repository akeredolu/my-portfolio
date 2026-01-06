'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [active, setActive] = useState('hero');

  // Move SECTIONS inside component so setActive is available
  const SECTIONS = {
    hero: {
      title: 'Welcome',
      content: (
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Akeredolu Waheed Adedayo
          </h1>

          <h3 className="text-2xl font-semibold text-indigo-600">
            Full-Stack Developer · Tech Educator · Robotics Instructor
          </h3>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I build modern, production-ready web applications and teach students
            and aspiring developers using real tools, real projects, and real
            industry standards.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            This portfolio showcases my work as a{' '}
            <strong>Full-Stack Engineer</strong> and my impact as a{' '}
            <strong>Technology Educator</strong>—bridging software engineering and
            practical digital skills.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-600 text-white px-6 py-3 hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 dark:border-gray-700 px-6 py-3 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View Resume Online
            </a>
          </div>
        </div>
      ),
    },

    about: {
      title: 'About Me',
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-indigo-600 p-2">
              <Image
              src="/my.jpg"
              alt="Akeredolu Waheed"
              width={240}
              height={240}
              className="object-cover rounded-xl"
              />
            </div>

          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Hello, I'm <span className="text-indigo-600">Akeredolu Waheed</span>
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a <strong>Tech Educator and Full-Stack Developer</strong> focused on building scalable, secure, and high-impact digital products. I design and develop modern web applications while teaching students and aspiring developers how real-world software is built. My work bridges <em>engineering excellence</em> and <em>education</em>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am particularly passionate about backend systems, APIs, real-time applications, and creating structured learning platforms that prepare learners for industry-level development.
            </p>

            <div className="pt-4">
              {/* ✅ SPA button to switch to contact section */}
              <button
                onClick={() => setActive('contact')}
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold"
              >
                Let’s Connect
              </button>
            </div>
          </div>
        </div>
      ),
    },


 portfolio: {
  title: 'Portfolio',
  content: (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" id="portfolio">
      {[
        {
          title: 'E-Learning Platform',
          description: 'Full-stack platform for online coding education using Django, React, and WebSockets.',
          image: '/projects/elearning.jpg',
          link: 'https://github.com/waheed/elearning',
          demo: 'https://elearning.example.com',
        },
        {
          title: 'Portfolio Website',
          description: 'Personal portfolio showcasing projects and professional background.',
          image: '/projects/portfolio.jpg',
          link: 'https://github.com/waheed/portfolio',
          demo: '/',
        },
        {
          title: 'Tech Blog',
          description: 'Modern blogging platform for tech articles built with Next.js and MDX.',
          image: '/projects/techblog.jpg',
          link: 'https://github.com/waheed/techblog',
          demo: 'https://techblog.example.com',
        },
        {
          title: 'Project Four',
          description: 'Description of your fourth project goes here. Replace with your real project.',
          image: '/projects/project4.jpg',
          link: '#',
          demo: '#',
        },
      ].map((p, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl overflow-hidden border bg-white dark:bg-gray-800 hover:shadow-2xl hover:scale-105 transition transform duration-300"
        >
          {/* Project Image */}
          <div className="relative h-56 w-full">
            <Image src={p.image} alt={p.title} fill className="object-cover" />
          </div>

          {/* Overlay on hover */}
          {p.demo && p.demo !== '#' && (
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Live Demo
              </a>
            </div>
          )}

          {/* Card Content */}
          <div className="p-5">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.description}</p>

            <div className="mt-3 flex gap-3 flex-wrap">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Code
              </a>
              {p.demo && p.demo !== '#' && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
},


  skills: {
  title: 'Skills & Expertise',
  content: (
    <div className="space-y-8">
      
      {/* Backend */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-indigo-600">
          Backend Development
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Python',
            'Django',
            'Django REST Framework',
            'REST APIs',
            'WebSockets',
            'Authentication & Authorization',
          ].map((skill) => (
            <li
              key={skill}
              className="rounded-xl bg-gray-100 dark:bg-gray-700 px-4 py-2 text-center font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Frontend */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-indigo-600">
          Frontend Development
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'JavaScript (ES6+)',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Responsive Design',
            'Component Architecture',
          ].map((skill) => (
            <li
              key={skill}
              className="rounded-xl bg-gray-100 dark:bg-gray-700 px-4 py-2 text-center font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Databases & DevOps */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-indigo-600">
          Databases & DevOps
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'PostgreSQL',
            'Database Design',
            'Docker',
            'Deployment & CI/CD',
            'Linux Servers',
            'Environment Configuration',
          ].map((skill) => (
            <li
              key={skill}
              className="rounded-xl bg-gray-100 dark:bg-gray-700 px-4 py-2 text-center font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Teaching & Professional */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-indigo-600">
          Teaching & Professional Skills
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Tech Education',
            'Curriculum Design',
            'Project-Based Learning',
            'Mentorship',
            'Technical Documentation',
            'Industry Best Practices',
          ].map((skill) => (
            <li
              key={skill}
              className="rounded-xl bg-gray-100 dark:bg-gray-700 px-4 py-2 text-center font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

    </div>
  ),
},


  resume: {
  title: 'Resume',
  content: (
    <div className="max-w-3xl space-y-6">
      
      {/* Intro */}
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        My resume highlights my experience as a <strong>Full-Stack Developer</strong>{' '}
        and <strong>Technology Educator</strong>, showcasing real-world projects,
        production systems, and structured teaching experience.
      </p>

      {/* Key Highlights */}
      <div className="grid md:grid-cols-2 gap-4">
        {[
          'Full-stack web application development (frontend & backend)',
          'Backend APIs, authentication, and real-time systems',
          'Production-ready deployments and database design',
          'Curriculum development and project-based tech education',
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href="/resume.pdf"
          download
          className="rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700 transition"
        >
          Download Resume (PDF)
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-gray-300 dark:border-gray-700 px-6 py-3 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          View Online
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 dark:text-gray-400 pt-2">
        Available upon request: detailed project breakdowns, teaching portfolio,
        and references.
      </p>
    </div>
  ),
},

  contact: {
    title: 'Contact',
    content: (
      <div className="flex items-center justify-center min-h-[60vh]">
        <form
  onSubmit={async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Safer fetch with nested try/catch
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let result;
      try {
        result = await res.json(); // parse JSON safely
      } catch {
        result = { success: false, message: "Server returned invalid JSON" };
      }

      if (result.success) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert(result.message || "Failed to send message. Try again later.");
      }
    } catch (err) {
      alert("Error sending message. Check console.");
      console.error(err);
    }
  }}
  className="w-full max-w-lg bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg space-y-6"
>
  <h3 className="text-2xl font-semibold text-center">Get in Touch</h3>

  <input
    name="name"
    type="text"
    placeholder="Your Name"
    required
    className="w-full border rounded-xl p-3"
  />

  <input
    name="email"
    type="email"
    placeholder="Your Email"
    required
    className="w-full border rounded-xl p-3"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={6}
    required
    className="w-full border rounded-xl p-3 resize-none"
  />

  <button
    type="submit"
    className="w-full bg-indigo-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-indigo-700 transition"
  >
    Send Message
  </button>
</form>

      </div>
    ),
  },
};

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-[320px_1fr]">
      {/* Sidebar */}
      <aside className="p-6 space-y-6 bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white shadow-lg rounded-tr-xl rounded-br-xl">
  <div className="text-center">
    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white p-1">
      <Image
        src="/my.jpg"
        alt="Waheed Dayo"
        width={112}
        height={112}
        className="object-cover rounded-full"
      />
    </div>
    <h1 className="text-xl font-bold">Akeredolu, Waheed A.</h1>
    <p className="text-sm text-indigo-100">Tech Educator & Full-Stack Developer</p>
  </div>

  <nav className="space-y-2">
    {Object.keys(SECTIONS).map((key) => (
      <button
        key={key}
        onClick={() => setActive(key)}
        className={`w-full px-4 py-2 rounded-xl text-left font-semibold transition ${
          active === key
            ? 'bg-white text-indigo-600 shadow-lg'
            : 'hover:bg-indigo-300/30 hover:text-white'
        }`}
      >
        {SECTIONS[key].title}
      </button>
    ))}
  </nav>
</aside>


      {/* Main content */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">{SECTIONS[active].title}</h2>
        {SECTIONS[active].content}
      </section>
    </main>
  );
}
