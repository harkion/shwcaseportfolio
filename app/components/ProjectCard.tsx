import Link from "next/link";
import type { ProjectSummary } from "../data/projects";

export default function ProjectCard({
  title,
  status,
  description,
  href,
}: ProjectSummary) {
  return (
    <article className="project-card">
      <div className="project-preview">
        <span>{title} preview — coming soon</span>
      </div>

      <div className="project-content">
        <p className="project-status">{status}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href}>Explore {title} →</Link>
      </div>
    </article>
  );
}