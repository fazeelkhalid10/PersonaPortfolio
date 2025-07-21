"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import styles from "../styles/Contact.module.css"

const Contact = () => {
  const handleEmailClick = () => {
    const subject = "Let's Connect "
    const body = `Hi Fazeel,

I came across your portfolio and would like to discuss a potential opportunity.

Best regards,`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=fazeelkhalid1000@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+923354603303"
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              discuss a project or just say hello!
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod} onClick={handleEmailClick}>
                <Mail className={styles.contactIcon} />
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>fazeelkhalid1000@gmail.com</span>
                </div>
              </div>

              <div className={styles.contactMethod} onClick={handlePhoneClick}>
                <Phone className={styles.contactIcon} />
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>+92 335 460 3303</span>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <MapPin className={styles.contactIcon} />
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Lahore, Punjab 5400</span>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://github.com/fazeelkhalid10"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in//fazeel-khalid-310ba1273/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
