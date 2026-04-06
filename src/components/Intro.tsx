import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Intro.module.css'

export default function Intro() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Multiple parallax layers at different speeds
  const lineY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const dotY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const hintY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section ref={ref} className={styles.intro}>
      {/* Parallax: vertical orange line */}
      <motion.div className={styles.parallaxLine} style={{ y: lineY }} aria-hidden />

      {/* Parallax: floating dot */}
      <motion.div className={styles.parallaxDot} style={{ y: dotY }} aria-hidden />

      {/* Parallax: decorative cross */}
      <motion.div className={styles.parallaxCross} style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '75%']) }} aria-hidden>
        <span />
        <span />
      </motion.div>

      {/* Main content */}
      <motion.div className={`section-inner ${styles.inner}`} style={{ y: contentY }}>
        {/* Name */}
        <div className={styles.nameWrap} aria-label="Florian Heinrich">
          {['FLORIAN', 'HEINRICH'].map((word, i) => (
            <div key={word} className={styles.lineClip}>
              <motion.span
                className={styles.nameLine}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </div>
          ))}
          <motion.span
            className="cursor-blink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            aria-hidden
          />
        </div>
      </motion.div>

      {/* Subtitle on separate parallax layer */}
      <motion.div className={`section-inner ${styles.subtitleOuter}`} style={{ y: subtitleY }}>
        <motion.div
          className={styles.subtitle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.degree}>Socio-Informatics (B.Sc)</span>
          <span className={styles.sep}>—</span>
          <span className={styles.desc}>Build. Learn. Ship.</span>
        </motion.div>
      </motion.div>

      {/* Scroll hint on its own layer */}
      <motion.div className={styles.scrollHintOuter} style={{ y: hintY }}>
        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          aria-hidden
        >
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
