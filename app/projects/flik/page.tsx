import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Flik | Fahri Can Genc",
  description:
    "How I designed and built Flik, a mobile app that helps people decide what to eat.",
};

export default function FlikPage() {
  return (
    <main>
      <section aria-labelledby="flik-title">
        <Link href="/#work">← Back to selected work</Link>

        <header>
          <p className="section-label">Completed · Mobile app</p>
          <h1 id="flik-title">Flik</h1>
          <p>
            Flik helps people answer a familiar question: what should I eat
            today? I designed and developed the app independently.
          </p>
        </header>

        <h2>What to ask once, and what to ask again</h2>
        <p>
          I designed onboarding around four questions: what dietary restrictions
          do you have, which cuisines do you like, what is your budget, and do
          you usually cook or eat out?
        </p>
        <p>
          A survey with 21 responses informed the mood check. I kept it separate
          from onboarding: dietary preferences might stay the same for
          months, but what they feel like eating can change from one meal to the
          next.
        </p>

        <figure className="case-figure">
          <Image
            src="/projects/flik/mood-check.png"
            width={1138}
            height={1774}
            sizes="(max-width: 760px) 92vw, 720px"
            alt="Three Flik designs showing different selected mood faces and energy slider positions."
          />

          <figcaption>
            Mood and energy are separate inputs: someone can choose a face for
            how they feel, then adjust their energy before tapping “Find my
            meal.”
          </figcaption>
        </figure>

        <h2>Three ways to choose a budget</h2>
        <p>
          In my design explorations, I compared buttons, a slider, and a swipe
          interaction for the same three price ranges: €, €€, and €€€. The
          question was how to make those choices clear before someone touched
          the screen.
        </p>
        <p>
          Buttons put all three prices in view. A slider needs three clear
          stops; otherwise it looks like someone can choose a value between €
          and €€. With a swipe, the screen needs a cue that there are other
          prices to choose from. These were design alternatives, not three
          controls I shipped.
        </p>

        <figure className="case-figure">
          <Image
            src="/projects/flik/onboarding.png"
            width={3534}
            height={1802}
            sizes="(max-width: 760px) 92vw, 720px"
            alt="Flik onboarding designs for dietary needs, cuisine preferences, budget, and cooking habits; the budget screen shows three price buttons."
          />

          <figcaption>
            This Figma board shows the button version of the budget question.
            The middle price range is selected.
          </figcaption>
        </figure>

        <h2>From a mood to a recipe</h2>
        <p>
          This clip shows the working app. I answer the mood question, choose a
          meal, and open its recipe.
        </p>

        <video
          className="project-video"
          controls
          loop
          muted
          playsInline
          preload="none"
          src="/projects/flik/demo.mp4"
          aria-label="Flik walkthrough: from the mood question to a meal and its recipe"
        >
          <a href="/projects/flik/demo.mp4">Open the Flik walkthrough</a>
        </video>

        <p>
          <Link href="/#work">← Back to selected work</Link>
        </p>
      </section>
    </main>
  );
}
