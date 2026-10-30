
import "./App.css";

const projects = [
  {
    number: "01",
    name: "WanderLust",
    category: "Travel & Listing Platform",
    description:
      "A full-stack travel listing application with authentication, reviews, image uploads and listing management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Himani996/MyWanderlurt",
    demo: "https://mywanderlurt-1.onrender.com/",
  },
  {
    number: "02",
    name: "My Video Call",
    category: "Real-Time Communication",
    description:
      "A video calling application using WebRTC and Socket.io for peer-to-peer media and real-time signaling.",
    tech: ["React", "WebRTC", "Socket.io", "Node.js"],
    github: "https://github.com/Himani996/MyVideoCall",
    demo: "https://myvideocall-frontend.onrender.com",
  },
  {
    number: "03",
    name: "Chatify",
    category: "Messaging Application",
    description:
      "A messaging application built to practice full-stack development, authentication and database integration.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/Himani996",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">MY WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          Some things I've built while learning and creating.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span className="project-number">
                {project.number}
              </span>
              <span className="project-symbol">&lt;/&gt;</span>
            </div>

            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="hero" id="home">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          HG<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="himanigautam2109@gamil.com"
          className="nav-contact"
        >
          Let's Talk ↗
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero-content">
        <div className="hero-text">
          <div className="availability">
            <span className="status-dot"></span>
            Open to opportunities
          </div>

          <p className="intro">HELLO, I'M</p>

          <h1>
            Himani
            <br />
            <span>Gautam.</span>
          </h1>

          <h2>
            Aspiring <span>MERN Stack Developer</span>
          </h2>

          <p className="description">
            I build modern, responsive and scalable web
            applications using React, Node.js, Express and
            MongoDB. I love turning ideas into real-world
            digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <span>↗</span>
            </a>

            <a
              href="/Himani-Gautam-Resume.pdf"
              download
              className="btn btn-secondary"
            >
              Download Resume <span>↓</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Himani996"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://leetcode.com/u/himani__2005/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode ↗
            </a>

            <a
              href="https://www.linkedin.com/in/himani-gautam-19430932a"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="hero-visual">
          <div className="photo-glow"></div>

          <div className="photo-frame">
            <img
              src="/profile.jpg"
              alt="Himani Gautam - MERN Stack Developer"
              className="profile-photo"
            />

            <div className="photo-caption">
              <span className="caption-dot"></span>
              Available for opportunities
            </div>
          </div>

          <div className="floating-tag tag-top">
            <span>✦</span> Creative Developer
          </div>

          <div className="floating-tag tag-bottom">
            <span>⌘</span> MERN Stack
          </div>

          <div className="photo-decoration decoration-one"></div>
          <div className="photo-decoration decoration-two"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-heading">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>
          <p className="section-subtitle">
            A little about my journey and what I love building.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card about-intro">
            <span className="about-icon">✦</span>
            <h3>Turning Ideas Into Web Experiences</h3>
            <p>
              I'm Himani Gautam, an MCA graduate and aspiring MERN
              Stack Developer. I enjoy building responsive web
              applications and solving real-world problems through
              technology.
            </p>
            <p>
              I have worked on projects involving React, Node.js,
              Express and MongoDB. I'm continuously learning and
              improving my development skills.
            </p>
          </div>

          <div className="about-card">
            <span className="about-icon">⌘</span>
            <h3>Frontend</h3>
            <p>Building responsive and user-friendly interfaces.</p>
            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className="about-card">
            <span className="about-icon">⚙</span>
            <h3>Backend</h3>
            <p>Creating APIs and working with databases.</p>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="about-card">
            <span className="about-icon">✧</span>
            <h3>Tools &amp; Learning</h3>
            <p>Tools I use to build and manage projects.</p>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Java</span>
              <span>SQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />
      
{/* Contact Section */}
<section className="contact-section" id="contact">
  <div className="section-heading">
    <p className="section-label">LET'S CONNECT</p>
    <h2>
      Let's Work <span>Together</span>
    </h2>
    <p className="section-subtitle">
      Looking for a fresher developer or have an opportunity?
      I'd love to hear from you.
    </p>
  </div>

  <div className="contact-card">
    <div className="contact-icon">✉</div>

    <h3>Get in Touch</h3>

    <p>
      I'm open to entry-level opportunities in web development
      and MERN Stack development.
    </p>

    <a
      href="himanigautam2109@gmail.com"
      className="contact-button"
    >
      Send Me an Email ↗
    </a>

    <div className="contact-socials">
      <a
        href="https://github.com/Himani996"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/himani-gautam-19430932a"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="hero-footer">
        <span>DESIGNING. DEVELOPING. LEARNING.</span>
        <a href="#about">SCROLL TO EXPLORE ↓</a>
      </footer>
    </main>
  );
}

export default App;
