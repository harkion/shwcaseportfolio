import Link from "next/link";
import type { ProjectSummary } from "../data/projects";
import Image from "next/image";

export default function ProjectCard({
  title,
  status,
  description,
  href,
  logoSrc,
  previewAlt,
}: ProjectSummary) {
  return (
    <article className="project-card">
      <div className="project-preview">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={previewAlt ?? ""}
            fill
            sizes={previewAlt ? "(max-width: 60rem) 95vw, 45rem" : "15rem"}
            className={previewAlt ? "project-screenshot" : "project-logo"}
          />
        ) : (
          <span>{title} preview — coming soon</span>
        )}
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
