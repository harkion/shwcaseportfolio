import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a href="/" className="site-name">
          Fahri Can Genc
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <p className="section-label">Portfolio · Web & mobile development</p>

          <h1 id="hero-title" className="hero-title">
            <span>Fahri</span> <span>Can</span> <span>Genc</span>
          </h1>

          <p>
            I build web and mobile applications with a focus on performance,
            accessibility, and user experience. I have experience working with
            various technologies and frameworks, including React, Next.js,
            Node.js, and Flutter. My goal is to create seamless and engaging
            digital experiences that meet the needs of users and businesses
            alike.
          </p>

          <a href="#work">Explore My Work ↓</a>
        </section>

        <section id="work" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
          <p>A selection of my projects and work in progress.</p>

          <div className="project-grid">
            <article className="project-card">
              <div className="project-preview">
                <span>Flik app preview — coming soon</span>
              </div>

              <div className="project-content">
                <p className="project-status">Completed · Mobile app</p>

                <h3>Flik</h3>

                <p>
                  A mobile app that helps people decide what to eat. Designed
                  and developed independently.
                </p>

                <Link href="/projects/flik">Explore Flik →</Link>
              </div>
            </article>

            <article className="project-card">
              <div className="project-preview">
                <span>Project preview — coming soon</span>
              </div>

              <div className="project-content">
                <p className="project-status">Krom Studio</p>

                <h3>Who Owns the Night?</h3>

                <p>A project with Krom Studio. More details coming soon.</p>
              </div>
            </article>

            <article className="project-card">
              <div className="project-preview">
                <span>Adim preview — coming soon</span>
              </div>

              <div className="project-content">
                <p className="project-status">Project</p>
                <h3>Adim</h3>
                <p>Project details coming soon.</p>
              </div>
            </article>

            {process.env.NODE_ENV === "development" && (
              <article className="project-card project-card--draft">
                <div className="project-preview">
                  <span>Future project preview</span>
                </div>

                <div className="project-content">
                  <p className="project-status">Draft · Development only</p>
                  <h3>Project template</h3>
                  <p>Replace this content when adding a new project.</p>
                </div>
              </article>
            )}
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">About me</h2>
          <p>
            I'm Fahri Can Genc, a web and mobile developer interested in
            building thoughtful, useful digital experiences.
          </p>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Let's get in touch</h2>
          <p>Contact details coming soon.</p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Fahri Can Genc · Web & mobile developer</p>
      </footer>
    </>
  );
}
