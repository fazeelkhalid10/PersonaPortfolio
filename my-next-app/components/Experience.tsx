import { link } from "fs"
import styles from "../styles/Experience.module.css"

const Experience = () => {
  const experiences = [
    //  {
    //   title: "Software Engineer",
    //   company: "BitBash",
    //   duration: "MAY 2025 - Present",
    //   description:
    //     "Developed and maintained multiple client projects (Open Stack). Collaborated with design team to create responsive web applications and RESTful APIs.",
    // },
    {
      title: "Software Engineer",
      company: "Caregenix Solutions",
      duration: "JUNE 2024 - MAY 2025",
      description:
        "Developed and maintained full-stack modules for the Cargenix Remote Health Monitoring System using .NET, .Net Core and Sql. ",
    },
   
    {
      title: "Free Lancing",
    //   company: "",
      duration: "2019 - 2024",
      description:
        "Started Freelaning career at fiverr and developed many full-stack websites",
    },
  ]

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.jobTitle}>{exp.title}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <span className={styles.duration}>{exp.duration}</span>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
