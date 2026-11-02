import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <>
      <main className="home-page">
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

          <Link href="#work">Explore My Work ↓</Link>
        </section>

        <section id="work" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
          <p>A selection of my projects and work in progress.</p>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.href}
                title={project.title}
                status={project.status}
                description={project.description}
                href={project.href}
                logoSrc={project.logoSrc}
                previewAlt={project.previewAlt}
              />
            ))}

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
          <p>
            <Link href="/previous-work">Browse previous work →</Link>
          </p>
        </section>

        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">About me</h2>
          <p>
            {
              "I'm Fahri Can Genc, a web and mobile developer interested in building thoughtful, useful digital experiences."
            }
          </p>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{"Let's get in touch"}</h2>
          <p>Contact details coming soon.</p>
        </section>
      </main>

      {/* <footer className="site-footer">
        <p>Fahri Can Genc · Web & mobile developer</p>
      </footer> */}
    </>
  );
}
