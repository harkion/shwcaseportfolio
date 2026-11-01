import Link from "next/link";

export default function GameCompanionPage() {
  return (
    <main>
      <section aria-labelledby="game-title">
        <Link href="/previous-work">← Back to previous work</Link>

        <p className="section-label">Group project</p>
        <h1 id="game-title">Game companion app</h1>

        <h2>Making text size easier to judge</h2>
        <p>
          I built the Settings screen from my Figma design. The text-size
          control let players change the setting, but it was not clear how
          large the text would look. I added sample text that resized in
          place so players could judge the result before leaving Settings.
        </p>
      </section>
    </main>
  );
}
