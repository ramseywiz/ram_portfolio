import Image from "next/image";
import Head from 'next/head'

export default function Home() {
  return (
    <>

      <nav className="navbar">
        <ul className="navlist">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="home" className="neighbor">
          <h1>Hello, traveler! 🧙</h1>
          <p>I'm Ramsey, a sophmore at the University of Houston. I'm an aspiring full-stack developer.</p>
        </section>

        <section id="about" className="neighbor">
          <h2>About Me</h2>
          <p>I love cloud‑infra & blockchain. Quick learner, team player.</p>
        </section>

        <section id="projects" className="neighbor">
          <h2>Projects</h2>
          <ul>
            <li><a href="https://github.com/…">Project One</a> – Next.js e‑commerce UI</li>
            <li><a href="https://github.com/…">Project Two</a> – Ethereum node on AWS</li>
          </ul>
        </section>

        <section id="contact" className="neighbor">
          <h2>Contact Me</h2>
          <p>
            I'm always open to chat (I love talking).
          </p>
          <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
        </section>
      </main>
    </>
  );
}
