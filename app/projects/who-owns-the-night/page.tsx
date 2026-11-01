import Link from "next/link";

export default function WhoOwnsTheNightPage() {
  return (
    <main>
      <section aria-labelledby="wotn-title">
        <Link href="/#work">← Back to selected work</Link>
        <p className="section-label">Krom Studio</p>
        <h1 id="wotn-title">Who Owns the Night?</h1>
        <p>A project with Krom Studio. More details coming soon.</p>
      </section>
    </main>
  );
}
