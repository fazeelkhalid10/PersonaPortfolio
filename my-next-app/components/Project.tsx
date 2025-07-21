import styles from "../styles/Projects.module.css"

const Projects = () => {
  const projects = [
    {
      title: "HealhSync (FYP)",
      description:
        "HealthSync is an AI-powered system that uses NLP, ML, and RAG models to detect diseases from symptoms, offering health tips, doctor recommendations, history tracking, appointment booking, and Google Maps-based doctor suggestions for a seamless user experience.",
      techStack: ["Next.js", "Django", "SQL"],
      githubLink: "https://github.com/fazeelkhalid10/HealthSync",
    },
    {
      title: "Aura Delights",
      description:
        "A modern online bakery platform built with Next.js and TypeScript, featuring a fully responsive UI and dynamic product catalog. Integrated WhatsApp ordering, admin panel for product management, and category-based item display for a seamless user experience.",
      techStack: ["Next.js", "MongoDB"],
      githubLink: "https://github.com/fazeelkhalid10/Aura-Delights",
    },
    {
      title: "Job Lister",
      description:"Built a full-stack job board application with React, Flask, and a Selenium-based web scraper that extracts real-time job data. Implemented CRUD operations, filters, and duplicate prevention with dynamic UI and API integration.",
      techStack: ["React.js", "Flask", "Selenium", "MySQL"],
      githubLink: "https://github.com/fazeelkhalid10/Job-Listing-App",
    },

    {
      title: "MediWise",
      description:
        "MediWise is an online medical store built with Next.js and MongoDB , offering a wide range of healthcare products. It features sale items, hot items, and essential medical supplies, providing a seamless shopping experience for users.",
      techStack: ["Next.js", "MongoDB"],
      githubLink: "https://github.com/fazeelkhalid10/MediWise",
    },


    {
      title: "AutoCare",
      description:
        "AutoCare is a modern car service management platform designed to streamline vehicle service bookings, mechanic assignments, invoice tracking, and service history for both customers and workshop owner.",
      techStack: ["React.js", "Express", "MongoDB"],
      githubLink: "https://github.com/johndoe/ecommerce-platform",
    },

    {
      title: "Car-price-estimator",
      description:
        "Car Price Estimator is a simple website that predicts the price of a car based on inputs like year, model, make, and mileage using a trained linear regression model on real-world datasets.Providing a seamless experience for users",
      techStack: ["HTML/CSS", "Python", "Pandas"],
      githubLink: "https://github.com/umerb9190/Car-price-estimator",
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  GitHub
                </a>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
