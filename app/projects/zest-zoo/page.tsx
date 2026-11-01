import Link from "next/link";

export default function ZestZooPage() {
  return (
    <main>
      <section aria-labelledby="zest-title">
        <Link href="/previous-work">← Back to previous work</Link>

        <p className="section-label">Personal project</p>
        <h1 id="zest-title">ZEST ZOO</h1>

        <h2>Making the coach choice visible</h2>
        <p>
          In my design, a short quiz matches the user with a squirrel,
          koala, or panda coach. Each coach has a different colour palette,
          so the result changes the look of the home screen as well as
          the character.
        </p>
      </section>
    </main>
  );
}