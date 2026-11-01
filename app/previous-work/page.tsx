import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { previousProjects } from "../data/projects";

export default function PreviousWorkPage() {
  return (
    <main>
      <section aria-labelledby="previous-work-title">
        <Link href="/#work">← Back to selected work</Link>

        <h1 id="previous-work-title">Previous work</h1>
        <p>A look at my earlier personal and group projects.</p>

        <div className="archive-grid">
          {previousProjects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
