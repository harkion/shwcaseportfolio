import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZEST ZOO | Fahri Can Genc",
  description:
    "A personal fitness app design exploring a five-question coach quiz and three animal-themed interfaces.",
};

export default function ZestZooPage() {
  return (
    <main>
      <section className="zest-case" aria-labelledby="zest-title">
        <Link href="/previous-work">← Back to previous work</Link>

        <header className="zest-intro">
          <p className="section-label">Personal project · App design</p>
          <h1 id="zest-title">ZEST ZOO</h1>
          <p>
            I designed a fitness app around a question: what if the coach
            you met during onboarding stayed with you when it was time
            to get up and move?
          </p>
        </header>

        <h2>From paper to a five-question quiz</h2>
        <p>
          I started with paper sketches before moving into Figma. In the
          onboarding design, five questions ask about time spent sitting,
          movement breaks, energy, exercise habits, and motivation. The
          result pairs the user with a squirrel, koala, or panda coach.
        </p>

        <figure>
          <Image
            src="/projects/zest-zoo/coach-quiz.png"
            width={2110}
            height={1578}
            sizes="(max-width: 760px) 92vw, 720px"
            alt="Five quiz screens with blue selected answers above the same questions in their unanswered states."
          />
          <figcaption>
            The Continue button is grey before an answer is selected and
            blue afterward. The final question changes the action to
            “See My Coach.”
          </figcaption>
        </figure>

        <h2>Why the panda is green</h2>
        <p>
          I used orange for the squirrel and grey for the koala. For the
          panda, I chose green instead of black because black looked too
          close to the koala’s grey. I wanted the three coaches to feel
          distinct even after the welcome screen was gone.
        </p>

        <figure>
          <Image
            src="/projects/zest-zoo/coach-themes.png"
            width={1066}
            height={2036}
            sizes="(max-width: 760px) 92vw, 720px"
            alt="Three rows of Figma screens: grey koala, green panda, and orange squirrel, each with a welcome, home, exercise, and reward screen."
          />
          <figcaption>
            The colour follows the coach from the greeting to the timer and
            reward. The koala flow shows a seated spinal twist; the squirrel
            flow shows a quick energy burst.
          </figcaption>
        </figure>

        <h2>Project walkthrough</h2>
        <video
          className="project-video"
          controls
          loop
          muted
          playsInline
          preload="none"
          poster="/projects/zest-zoo/coach-quiz.png"
          src="/projects/zest-zoo/demo.mp4"
          aria-label="ZEST ZOO walkthrough"
        >
          <a href="/projects/zest-zoo/demo.mp4">Open the ZEST ZOO video</a>
        </video>

        <h2>Related practice</h2>
        <p>
          Zone In was a related SwiftUI practice experiment. The screens
          shown here document the ZEST ZOO design in Figma.
        </p>

        <Link href="/previous-work">← Back to previous work</Link>
      </section>
    </main>
  );
}
