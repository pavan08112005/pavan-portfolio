"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Flask",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Git",
  "GitHub",
];

const projects = [
  {
    number: "01",
    title: "MentorMind-AI",
    category: "AI / EDUCATION",
    description:
      "A full-stack web application that helps students prepare for placements through user authentication, resume guidance, coding resources, interview preparation, and a responsive dashboard.",
    technologies: [
      "Python",
      "Flask",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "Git",
      "GitHub",
    ],
    github: "https://github.com/pavan08112005/mentormind-ai",
    liveDemo: "https://your-live-demo-url.com",
  },
  {
    number: "02",
    title: "AI Website Builder",
    category: "FULL STACK / AI",
    description:
      "A full-stack AI-powered web application that generates dynamic website content and helps users create and manage website projects using AI APIs.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "AI APIs",
    ],
    github: "https://github.com/pavan08112005/ai-website-builder",
    liveDemo: "https://ai-website-builder-git-main-pavan-dadd.vercel.app",
    
  },
  {
    number: "03",
    title: "Restaurant Booking App",
    category: "FULL STACK",
    description:
      "A restaurant reservation system with user authentication, table booking, booking management, and an admin dashboard for managing reservations.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/pavan08112005/restaurant-booking-app",
    liveDemo: "https://your-live-demo-url.com",
  },
  {
    number: "04",
    title: "Grocery Delivery App",
    category: "FULL STACK",
    description:
      "A full-stack grocery delivery platform featuring authentication, shopping cart functionality, secure payments, and an admin dashboard for product, inventory, and order management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    github: "https://github.com/pavan08112005/Grocery-Delivery-App",
    liveDemo: "https://your-live-demo-url.com",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.08] bg-black/70 px-5 py-3 backdrop-blur-xl">

          <a
            href="#home"
            className="text-lg font-bold tracking-[-0.04em]"
          >
            PAVAN KUMAR C<span className="text-zinc-600">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13px] text-zinc-500 transition duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2 text-[13px] font-medium text-black transition duration-300 hover:scale-105 md:block"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-zinc-300 md:hidden"
            aria-label="Menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/[0.08] bg-black/95 p-5 backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/[0.06] py-4 text-sm text-zinc-400 transition hover:text-white last:border-none"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.06] blur-[150px]" />

        <div className="pointer-events-none absolute right-0 top-1/4 h-[350px] w-[350px] rounded-full bg-blue-700/[0.04] blur-[140px]" />

        <div className="mx-auto w-full max-w-7xl px-6 pb-28 pt-32">

          <div className="grid items-center gap-20 lg:grid-cols-[1fr_400px]">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500">
                Information Science &amp; Engineering Student
              </p>

              <h1 className="text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.82] tracking-[-0.08em]">
                Pavan
                <br />

                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
                  Kumar C
                </span>
              </h1>

              <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">
                Engineering student passionate about{" "}
                <span className="text-zinc-200">
                  full-stack development
                </span>
                , artificial intelligence and building meaningful
                digital products.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <a
                  href="#projects"
                  className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition duration-300 hover:scale-105"
                >
                  View Projects
                  <span className="ml-2">↗</span>
                </a>
                
                 <a
    href="/resume/pavan-resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/[0.06]"
  >
    View Resume ↗
  </a>

                

              </div>
              

              <div className="mt-10 flex items-center gap-5">

                <a
                  href="https://www.linkedin.com/in/pavan-kumar-c-503923299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-zinc-600 transition hover:text-white"
                >
                  LinkedIn ↗
                </a>

                <span className="text-zinc-800">•</span>

                <a
                  href="https://github.com/pavan08112005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-zinc-600 transition hover:text-white"
                >
                GitHub ↗
                </a>

              </div>

            </motion.div>


            {/* PROFILE */}

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="relative mx-auto mb-24 w-full max-w-[380px]"
            >

              <div className="relative overflow-visible rounded-[2rem] border border-white/[0.1] bg-zinc-900">

                <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">

                  <img
                    src="/images/pavan-profile.jpg"
                    alt="Pavan Kumar C"
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/70 via-transparent to-transparent" />


                {/* NAME */}

                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between rounded-2xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-md">

                  <div>

                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-white">
                      Pavan Kumar C
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                      Information Science Engineer
                    </p>

                  </div>

                  <span className="text-xl text-white">
                    ↗
                  </span>

                </div>

              </div>


              {/* LOCATION */}

              <div className="absolute -bottom-20 right-0 z-30 rounded-2xl border border-white/10 bg-black px-5 py-4 shadow-2xl">

                <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                  Based in
                </p>

                <p className="mt-1 text-sm text-zinc-300">
                  Karnataka, India
                </p>

              </div>

            </motion.div>

          </div>


          <motion.a
            href="#about"
            animate={{ y: [0, 7, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mx-auto mt-16 block w-fit text-2xl text-zinc-700 transition hover:text-white"
          >
            ↓
          </motion.a>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="border-t border-white/[0.06] py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-600">
                01 — About
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                <span className="text-zinc-600">
                  About.
                </span>
              </h2>

            </div>

            <div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Building practical
                <span className="text-zinc-600">
                  {" "}solutions with technology.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 md:grid-cols-2">

                <p className="leading-8 text-zinc-500">
                  I&apos;m Pavan Kumar C, a B.E. Information Science &
                  Engineering student with a strong interest in software
                  development, artificial intelligence and modern web
                  technologies.
                </p>

                <p className="leading-8 text-zinc-500">
                  I enjoy building full-stack applications, exploring
                  AI-powered solutions and continuously improving my
                  programming and problem-solving skills.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ====================================================== */}

      <section
        id="skills"
        className="border-t border-white/[0.06] py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-600">
                02 — Skills
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                My
                <br />
                <span className="text-zinc-600">
                  toolkit.
                </span>
              </h2>

            </div>

            <div>

              <p className="max-w-xl leading-7 text-zinc-500">
                Technologies and tools I use to build web applications,
                AI solutions and full-stack projects.
              </p>

              <div className="mt-10 flex flex-wrap gap-2.5">

                {skills.map((skill, index) => (

                  <motion.div
                    key={skill}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.025,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs text-zinc-400 transition hover:border-white/20 hover:text-white"
                  >
                    {skill}
                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="border-t border-white/[0.06] py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-600">
                03 — Selected Work
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                Things I&apos;ve
                <br />

                <span className="text-zinc-600">
                  built.
                </span>
              </h2>

            </div>

            <p className="max-w-sm leading-7 text-zinc-500">
              A selection of my full-stack, AI and software development
              projects.
            </p>

          </div>


          <div className="mt-20">

            {projects.map((project, index) => (

              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group border-t border-white/[0.08] py-10 last:border-b"
              >

                <div className="grid gap-8 md:grid-cols-[70px_1fr_160px_auto] md:items-center">

                  <span className="text-xs text-zinc-700">
                    {project.number}
                  </span>


                  <div>

                    <h3 className="text-3xl font-medium tracking-[-0.04em] transition duration-300 group-hover:text-zinc-300 sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 transition group-hover:text-zinc-500">
                      {project.description}
                    </p>


                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (

                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.07] px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-600"
                        >
                          {technology}
                        </span>

                      ))}

                    </div>

                  </div>


                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                    {project.category}
                  </p>


                  <div className="flex items-center gap-3">

  {/* GitHub */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${project.title} on GitHub`}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/[0.03] text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.8),0_0_40px_rgba(168,85,247,0.5),0_0_70px_rgba(168,85,247,0.3)]">
    GH
  </a>

  {/* Live Demo */}
  <a
    href={project.liveDemo}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View live demo of ${project.title}`}
    className="flex h-11 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/[0.03] px-4 text-xs font-medium uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.8),0_0_40px_rgba(168,85,247,0.5),0_0_70px_rgba(168,85,247,0.3)]">
    Live Demo ↗
  </a>

</div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EDUCATION
      ====================================================== */}

      <section
        id="education"
        className="border-t border-white/[0.06] py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-600">
                04 — Education
              </p>

              <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em]">
                Academic
                <br />
                <span className="text-zinc-600">
                  journey.
                </span>
              </h2>

            </div>


            <div>

              <div className="border-t border-white/[0.08] py-8">

                <div className="flex flex-col justify-between gap-5 sm:flex-row">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      Bachelor of Engineering
                    </p>

                    <h3 className="mt-3 text-2xl font-medium tracking-tight">
                      Information Science &amp; Engineering
                    </h3>

                    <p className="mt-3 text-sm text-zinc-600">
                      Currently pursuing B.E. in Information Science &
                      Engineering.
                    </p>

                  </div>

                  <span className="text-xs text-zinc-700">
                    2023 — Present
                  </span>

                </div>

              </div>


              <div className="border-t border-white/[0.08] py-8">

                <div className="flex flex-col justify-between gap-5 sm:flex-row">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      Diploma
                    </p>

                    <h3 className="mt-3 text-2xl font-medium tracking-tight">
                      Engineering Diploma
                    </h3>

                    <p className="mt-3 text-sm text-zinc-600">
                      Completed diploma before joining engineering through
                      lateral entry.
                    </p>

                  </div>

                  <span className="text-xs text-zinc-700">
                    Completed
                  </span>
                

                </div>

              </div>
              <div className="border-t border-white/[0.08] py-8">

                <div className="flex flex-col justify-between gap-5 sm:flex-row">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      Secondary Education
                    </p>

                    <h3 className="mt-3 text-2xl font-medium tracking-tight">
                      Secondary Education
                    </h3>

                    <p className="mt-3 text-sm text-zinc-600">
                      Completed Secondary Education before joining Diploma .
                    </p>

                  </div>

                  <span className="text-xs text-zinc-700">
                    Completed
                  </span>
                

                </div>

              </div>
              

            </div>

          </div>

        </div>

      </section>
      {/* ================= RESUME ================= */}

<section
  id="resume"
  className="border-t border-white/[0.06] py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-600">
          05 — Resume
        </p>

        <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
          My
          <br />
          <span className="text-zinc-600">
            resume.
          </span>
        </h2>
      </div>

      <div>
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">

            <div>
              <p className="text-lg font-medium">
                Pavan Kumar C
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Information Science & Engineering
              </p>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600">
                View my education, technical skills, projects and
                professional profile in my latest resume.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href="/resume/pavan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
              >
                View Resume ↗
              </a>

              <a
                href="/resume/pavan-resume.pdf"
                download
                className="rounded-full border border-white/[0.1] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
              >
                Download
              </a>

            </div>

          </div>

        </div>
      </div>

    </div>

  </div>
</section>


      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="border-t border-white/[0.06] py-36"
      >

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-600">
            05 — Contact
          </p>


          <h2 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.85] tracking-[-0.07em] sm:text-7xl md:text-9xl">
            Let&apos;s make
            <br />

            <span className="text-zinc-600">
              something.
            </span>
          </h2>


          <p className="mt-10 max-w-xl leading-7 text-zinc-500">
            Have an idea, opportunity or interesting project?
            I&apos;d love to hear about it.
          </p>


          <div className="mt-9 flex flex-wrap gap-3">

            {/* CHANGE THIS EMAIL */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pavangowda@462108@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105">
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/pavan-kumar-c-503923299/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[0.1] px-7 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/pavan08112005"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[0.1] px-7 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
            >5
              GitHub ↗
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/[0.06] py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-[11px] uppercase tracking-[0.12em] text-zinc-700 sm:flex-row">

          <p>
            © 2026 Pavan Kumar C
          </p>

          <p>
            Information Science &amp; Engineering
          </p>

        </div>

      </footer>

    </main>
  );
}