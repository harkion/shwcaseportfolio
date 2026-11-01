import Link from "next/link";

export default function AdimPage() {
  return (
    <main>
      <section aria-labelledby="adim-title">
        <Link href="/#work">← Back to selected work</Link>
        <p className="section-label">Project</p>
        <h1 id="adim-title">Adim</h1>
        <p>Project details coming soon.</p>
      </section>
    </main>
  );
}
