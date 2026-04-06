import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Projects.module.css'

const PROJECTS = [
  { url: 'gn1ght.com', label: 'GN1GHT', domain: 'gn1ght.com', desc: 'Group-based Eurovision rating app. Score songs, assign points, compare results - built for the annual argument with your friends. Powered by Laravel and Filament.' },
  { url: 'kopf-kino.eu', label: 'KOPF-KINO', domain: 'kopf-kino.eu', desc: 'A website for storyteller Sabine Heinrich - showcasing her programmes, vita, and upcoming events. Built with Laravel, content-managed through a custom admin panel.' },
  { url: 'drunksweeper.com', label: 'DRUNKSWEEPER', domain: 'drunksweeper.com', desc: 'Minesweeper meets drinking game - a card-based browser game where mines, warnings, and bluff cards are dealt across a 5×4 grid. Built with React and TypeScript, fully playable in the browser.' },
]

const FAVICON_FALLBACKS: Record<string, string> = {
  'drunksweeper.com': `https://icons.duckduckgo.com/ip3/drunksweeper.com.ico`,
}

function getFaviconUrl(domain: string) {
  return FAVICON_FALLBACKS[domain] ?? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
}

function ProjectItem({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  return (
    <motion.a
      href={`https://${project.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.item}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.itemInner}>
        {/* Favicon */}
        <div className={styles.faviconWrap}>
          <img
            src={getFaviconUrl(project.domain)}
            alt=""
            className={styles.favicon}
            width={32}
            height={32}
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        {/* Project name + desc */}
        <div className={styles.nameGroup}>
          <span className={styles.name}>{project.label}</span>
          <span className={styles.desc}>{project.desc}</span>
        </div>

        {/* URL */}
        <span className={styles.urlText}>{project.url}</span>

        {/* Arrow */}
        <span className={styles.arrow} aria-hidden>↗</span>
      </div>

      {/* Animated underline */}
      <span className={styles.underline} aria-hidden />
    </motion.a>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section ref={ref} id="projects" className={styles.projects}>
      <div className="section-inner">
        <motion.p
          className={styles.sectionLabel}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Web Projects
        </motion.p>

        <div className={styles.list}>
          {PROJECTS.map((project, i) => (
            <ProjectItem key={project.url} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
