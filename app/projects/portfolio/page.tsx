import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main>
      <section aria-labelledby="portfolio-title">
        <Link href="/#work">← Back to selected work</Link>

        <p className="section-label">Personal project · Next.js</p>
        <h1 id="portfolio-title">Building this portfolio</h1>

        <p>
          I am learning Next.js by building this site with TypeScript and plain
          CSS.
        </p>

        <h2>From three copies to one card</h2>
        <p>
          My first project grid repeated the same markup for each project. To
          change the card layout, I had to edit it in three places.
        </p>
        <p>
          Now each project is an entry in a typed list, and one component
          renders the cards. I can reuse that component for Previous work while
          keeping the homepage selection separate.
        </p>
      </section>
    </main>
  );
}
