import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './components/Reveal'
import ThemeToggle from './components/ThemeToggle'

const TAGLINES = ['Frontend Developer', 'React & Next.js']

function useCycle(items, interval = 2200) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), interval)
    return () => clearInterval(t)
  }, [items.length, interval])
  return items[i]
}

const NAME = 'Gourilakshmi T S'
const ROLE = 'Frontend Developer'
const EMAIL = 'gourilakshmits@gmail.com'
const PHONE = '+91 7591960173'
const LOCATION = 'Kottayam, Kerala, India'
const LINKEDIN = 'https://linkedin.com/in/gourilakshmi-t-s-62536b209'
const GITHUB = 'https://github.com/Gouri-lakshmi'

const EXPERIENCE = [
  {
    n: '01',
    role: 'Web Developer Intern',
    company: 'Zidio Development · Remote',
    dates: '05/2025 — 07/2025',
    points: [
      'Collaborated on two MERN stack projects, building responsive frontend interfaces in React.js.',
      'Built RESTful APIs, managed application state, and took part in deployment workflows.',
    ],
  },
  {
    n: '02',
    role: 'Junior Frontend Developer',
    company: 'Ceymox Technologies',
    dates: '03/2022 — 05/2024',
    points: [
      'Developed and maintained responsive e-commerce applications using Next.js, TypeScript, and GraphQL.',
      'Built reusable UI components using React.js, HTML5, CSS3, Tailwind CSS, and Material UI.',
      'Optimized application performance and ensured cross-browser compatibility.',
    ],
  },
]

const SKILL_GROUPS = [
  { label: 'Frameworks', items: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Material UI'] },
  { label: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript'] },
  { label: 'Styling', items: ['HTML5', 'CSS3', 'SCSS'] },
  { label: 'APIs & Tools', items: ['REST APIs', 'GraphQL', 'GitHub', 'Postman', 'Altair'] },
]

const PROJECTS = [
  { name: 'KalyanSilks', desc: 'E-commerce platform for a major textile retailer.', link: 'https://www.kalyansilks.com/' },
  { name: 'KalyanHyper', desc: 'E-commerce platform, hypermarket retail.', link: 'https://kalyanhyper.com' },
  { name: 'PaulAlukkas', desc: 'E-commerce platform for a jewellery retailer.', link: 'https://alukkasjewellery.com' },
]
const PROJECTSPERSONAL = [
  { name: 'LotusFlix', desc: 'C-Drama Discovery & Watchlist Platform.', link: 'https://lotusflix.netlify.app/' },
]

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-4">{children}</p>
  )
}

export default function App() {
  const tagline = useCycle(TAGLINES)

  return (
    <div className="min-h-screen bg-ink text-paper font-sans selection:bg-gold selection:text-ink">
      <ThemeToggle />
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
        />

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-mono text-xs uppercase text-gold mb-6 relative"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl font-semibold mb-4 relative"
        >
          {NAME}
        </motion.h1>

        <div className="h-8 relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={tagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-muted text-lg md:text-xl tracking-wide"
            >
              {tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-8 relative"
        >
          {['2+ years experience', '3 e-commerce launches', 'React.js · Next.js · TypeScript · JavaScript'].map((chip) => (
            <span key={chip} className="text-xs font-mono px-3 py-1.5 rounded-full border border-line text-muted">
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { duration: 0.5, delay: 0.6 }, y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
          className="mt-14 text-muted hover:text-gold transition-colors relative"
          aria-label="Scroll to experience"
        >
          <ChevronDown size={20} />
        </motion.a>
      </section>
      <section className="px-6 py-24 md:py-32 max-w-2xl mx-auto text-center">
        <Reveal>
          <Eyebrow>Profile</Eyebrow>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-paper/90">
            Frontend developer with over two years of experience designing and
            building responsive, user-centric web applications — from
            e-commerce platforms to internal tools. Passionate about clean
            code and interfaces that hold up in production.
          </p>
        </Reveal>
      </section>

      <div className="max-w-3xl mx-auto border-t border-line" />
      <section id="experience" className="px-6 py-24 md:py-32 max-w-3xl mx-auto">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
        </Reveal>
        <div className="mt-10 space-y-16">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="flex gap-6 md:gap-10">
                <span className="font-serif text-3xl md:text-4xl text-gold/60 shrink-0">{job.n}</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-xl md:text-2xl">{job.role}</h3>
                    <span className="font-mono text-xs text-muted">{job.dates}</span>
                  </div>
                  <p className="text-gold text-sm mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="text-muted leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-gold/50" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto border-t border-line" />
      <section className="px-6 py-24 md:py-32 max-w-3xl mx-auto">
        <Reveal>
          <Eyebrow>Skills</Eyebrow>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.08}>
              <h4 className="font-serif text-lg mb-3">{g.label}</h4>
              <p className="text-muted leading-relaxed">{g.items.join(' · ')}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto border-t border-line" />
      <section className="px-6 py-24 md:py-32 max-w-3xl mx-auto">
        <Reveal>
          <Eyebrow>Professional projects</Eyebrow>
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-6 hover:pl-2 transition-all duration-300"
              >
                <div>
                  <h3 className="font-serif text-xl md:text-2xl group-hover:text-gold transition-colors">{p.name}</h3>
                  <p className="text-muted text-sm mt-1">{p.desc}</p>
                </div>
                <ArrowUpRight className="text-muted group-hover:text-gold transition-colors shrink-0" size={22} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
        <section className="px-6 py-24 md:py-32 max-w-3xl mx-auto">
        <Reveal>
          <Eyebrow>Personal Projects </Eyebrow>
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {PROJECTSPERSONAL.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-6 hover:pl-2 transition-all duration-300"
              >
                <div>
                  <h3 className="font-serif text-xl md:text-2xl group-hover:text-gold transition-colors">{p.name}</h3>
                  <p className="text-muted text-sm mt-1">{p.desc}</p>
                </div>
                <ArrowUpRight className="text-muted group-hover:text-gold transition-colors shrink-0" size={22} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="px-6 py-24 md:py-32 max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-10 gap-y-10">
        <Reveal>
          <Eyebrow>Education</Eyebrow>
          <h4 className="font-serif text-lg mb-2">B.Sc Computer Science</h4>
          <p className="text-muted">B C M College, Kottayam</p>
          <p className="font-mono text-xs text-muted mt-2">06/2018 — 03/2021</p>
        </Reveal>
        <Reveal delay={0.08}>
          <Eyebrow>Certificate</Eyebrow>
          <h4 className="font-serif text-lg mb-2">MEA(R)N Full Stack Web Development</h4>
          <p className="text-muted">Luminar TechnoLab, Kochi</p>
          <p className="font-mono text-xs text-muted mt-2">Aug 2021 — Jan 2022</p>
        </Reveal>
      </section>

      <div className="max-w-3xl mx-auto border-t border-line" />
      <section className="px-6 py-24 md:py-32 max-w-2xl mx-auto text-center">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Let's talk</h2>
          <p className="text-muted mb-10">
            Open to Frontend / React roles — happy to walk through my resume or any project above.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 px-4 py-2 rounded-full border border-line hover:border-gold hover:text-gold transition-colors">
              <Mail size={15} /> {EMAIL}
            </a>
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 px-4 py-2 rounded-full border border-line hover:border-gold hover:text-gold transition-colors">
              <Phone size={15} /> {PHONE}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-line hover:border-gold hover:text-gold transition-colors">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-line hover:border-gold hover:text-gold transition-colors">
              <Github size={15} /> GitHub
            </a>
          </div>
          <p className="flex items-center justify-center gap-2 text-muted text-xs mt-8">
            <MapPin size={13} /> {LOCATION}
          </p>
        </Reveal>
      </section>
    </div>
  )
}
