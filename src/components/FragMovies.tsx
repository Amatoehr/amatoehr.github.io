import { motion } from 'framer-motion'
import 'lite-youtube-embed/src/lite-yt-embed.css'
import 'lite-youtube-embed/src/lite-yt-embed.js'
import styles from './FragMovies.module.css'

const VIDEOS = [
  {
    id: 'xonqQIC_7L0',
    title: 'Somewhere We Belong',
  },
  {
    id: 'aGZ2XLu99kM',
    title: 'Lost Our Minds',
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function FragMovies() {
  return (
    <section id="videos" className={styles.fragMovies}>
      <div className="section-inner">
        <FadeUp>
          <p className={styles.sectionLabel}>Video editing</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className={styles.intro}>
            Counter-Strike frag movies - edited and compiled from competitive play.
          </p>
        </FadeUp>

        <div className={styles.grid}>
          {VIDEOS.map((video, i) => (
            <FadeUp key={video.id} delay={0.15 + i * 0.12}>
              <div className={styles.videoWrap}>
                <lite-youtube videoid={video.id} playlabel={video.title} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
