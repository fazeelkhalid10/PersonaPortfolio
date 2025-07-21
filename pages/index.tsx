import Head from "next/head"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Project"
import Contact from "../components/Contact"

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Fazeel Bin Khalid - Full Stack Developer</title>
        <meta
          name="description"
          content="Professional portfolio of John Doe, Full Stack Developer specializing in React, Node.js, and modern web technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}
 