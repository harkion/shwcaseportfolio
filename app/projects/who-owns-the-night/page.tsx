import Link from "next/link";

export default function WhoOwnsTheNightPage() {
  return (
    <main>
      <section aria-labelledby="wotn-title">
        <Link href="/#work">← Back to selected work</Link>
        <p className="section-label">Krom Studio</p>
        <h1 id="wotn-title">Night Light</h1>
        <p>
          “Who Owns the Night?” was our project question. Our team’s answer was
          Night Light, an experience where visitors explore nightlife stories
          through a 3D street.
        </p>
      </section>
    </main>
  );
}
