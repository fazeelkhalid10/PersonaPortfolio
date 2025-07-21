"use client"

import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.photoSection}>
            <div className={styles.photoContainer}>
              <img
                src="/Fazeel.jpeg?height=300&width=300"
                alt="John Doe - Professional Photo"
                className={styles.profilePhoto}
              />
            </div>
          </div>
          <div className={styles.textSection}>
            <h1 className={styles.name}>Fazeel Bin Khalid</h1>
            <h2 className={styles.title}>Full Stack Developer</h2>
            <p className={styles.tagline}>
              Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient
              code.
            </p>
            <div className={styles.cta}>
              <button
                className={styles.primaryButton}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
