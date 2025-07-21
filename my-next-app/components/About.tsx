import styles from "../styles/About.module.css"

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.bio}>
            <p>
              Hi, I'm Fazeel Bin Khalid, a fresh Computer Science student at FAST NUCES, with a strong passion for web development and software engineering. 
              I’ve built a variety of projects using modern technologies like Next.js, React, .NET and the MERN stack, focusing on responsive design, performance, and clean code architecture.
            </p>
            <p>
             I enjoy creating full-stack applications — from sleek user interfaces to powerful backend systems using Node.js and MongoDB. Alongside that, I’ve also gained professional experience working with ASP.NET and SQL Server during my time at Caregenix for an year, where I contributed to real-world healthcare solutions and strengthened my backend skills.
With a growth mindset and a love for problem-solving, I’m always exploring new technologies, building useful tools, and pushing myself to the next level.
            </p>
          </div>
          <div className={styles.details}>
            <div className={styles.detailCard}>
              <h3>Background</h3>
              <p>
                I come from an educated and supportive family that has always emphasized the value of learning, discipline, and continuous growth. This strong foundation instilled in me a passion for technology and a commitment to constantly improving my skills in software development.

              </p>
            </div>
            <div className={styles.detailCard}>
              <h3>Education</h3>
              <p>
                <strong>Bachelors in Computer Science</strong>
                <br />
                FAST-NUCES (2021-2025)
                <br />
                <strong>FSC</strong>
                <br />
                GCU (2019-2021)
                <br />
                 <strong>O Levels and School</strong>
                <br />
                Beconhouse (2005-2019)
                <br />
              </p>
            </div>
            <div className={styles.detailCard}>
              <h3>Skills</h3>
              <div className={styles.skills}>
                <span className={styles.skill}>React</span>
                <span className={styles.skill}>Next.js</span>
                <span className={styles.skill}>Node.js</span>
                <span className={styles.skill}>.NET</span>
                <span className={styles.skill}>Python</span>
                <span className={styles.skill}>JavaScript</span>
                <span className={styles.skill}>TypeScript</span>
                <span className={styles.skill}>PostgreSQL</span>
                 <span className={styles.skill}>SQL</span>
                <span className={styles.skill}>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
