import Link from "next/link";

export default function FlikPage() {
  return (
    <main>
      <section aria-labelledby="flik-title">
        <Link href="/#work">← Back to selected work</Link>

        <p className="section-label">Completed · Mobile app</p>

        <h1 id="flik-title">Flik</h1>

        <p>
          A mobile app that helps people decide what to eat.
        </p>

        <h2>My role</h2>

        <p>
          I designed and developed Flik independently.
        </p>
      </section>
    </main>
  );
}