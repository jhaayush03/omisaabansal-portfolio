export function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-8 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-12">
          <div className="mb-8 text-pretty text-base leading-relaxed text-zinc-300">
            Hello there! I'm Alexandra Chen, a passionate economist and business
            strategist, with a keen eye for blending analytical rigor and
            innovative thinking.
          </div>

          <div className="mb-8 flex justify-center">
            <img src="/i.jpeg" alt="Alexandra Chen" className="rounded-lg" />
          </div>

          <div className="space-y-6 text-pretty text-base leading-relaxed text-zinc-300">
            <p>
              My academic journey has been peppered with excellence, including
              prestigious awards and accolades. I'm the author of 'The Economics
              of Innovation,' a groundbreaking analysis of how technology drives
              economic growth, and I have a deep-seated interest in crafting
              data-driven solutions for complex business challenges.
            </p>

            <p>
              Beyond the world of economics, you'll find me exploring global
              markets, where my passion for international trade fuels my
              adventurous spirit and analytical mindset.
            </p>

            <p>
              I'm also a certified financial analyst and trained business
              consultant, exploring different methodologies for strategic
              planning and organizational development. Join me as we embark on a
              journey of insight, analysis, and transformative business
              solutions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
