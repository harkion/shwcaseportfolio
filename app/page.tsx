export default function Home() {
  return (
    <>
      <header className="site-header">
        <a href="/" className="site-name">
          Fahri Can Genc
        </a>

        <nav aria-label="Main navigation">
          <a href="/work">Work</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main className="starter">
        <section className="hero" aria-label="hero-title">
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
