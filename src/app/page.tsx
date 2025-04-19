export default function Home() {
  return (
    <div className="scroll-div">
      <main>
        <section id="home" className="neighbor fade-in fade-in-delay-1">
          <h1>Greetings, fellow traveler!</h1>
          <p>I'm Ramsey, a sophmore at the University of Houston. I'm a full-stack developer. Outside of webdev, I like hiking, going to the gym, and playing video games! You can find my projects, resume, and all my links below. Enjoy the stay, young one!</p>
        </section>
        
        <section id="projects" className="neighbor fade-in fade-in-delay-2">
          <h2>Projects</h2>
          <ul>
            <li className="project-box"><a href="https://github.com/ramseywiz/theapp">Daily Planner</a> - A desktop app to help you structure your day. Built using C#, .NET, WPF, MVVM, 
            with a backend built with ASP.NET & MySQL, hosted on Azure. Check it out!</li>
            <li className="project-box"><a href="https://www.roblox.com/games/450756180/Uhtceare-Pre-Alpha">Uhtceare</a> – A game built on Roblox using Lua. 
            We made it to alpha build with over 2,000 purchases. A demo is available for play!</li>
          </ul>
        </section>

        <section id="contact" className="neighbor fade-in fade-in-delay-3">
          <h2>My Links </h2>

          <div className="contact-links">
            <a href="https://github.com/ramseywiz" className="contact-item" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="GitHub icon" className="contact-icon"/>
              <span>ramseywiz</span>
            </a>

            <a href="mailto:ramchandoklow@gmail.com" className="contact-item">
              <img src="/email.png" alt="Email icon" className="contact-icon"/>
              <span>ramchandoklow@gmail.com</span>
            </a>

            <a href="/resume.pdf" className="contact-item" target="_blank" rel="noopener noreferrer">
              <img src="/resume.png" alt="Resume icon" className="contact-icon"/>
              <span>Ramsey's Resume</span>
            </a>
          </div>
        </section>
        <p className="fade-in fade-in-delay-4"> This site's design is heavily inspired by <a href="https://www.wizard101.com/">Wizard101's landing page.</a></p>
        <figure>

        </figure>
      </main>
    </div>
  );
}
