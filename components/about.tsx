export function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-8 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-12">
          <div className="mb-8 text-pretty text-base leading-relaxed text-zinc-300">
           Hello there! I’m Omisaa Bansal, a passionate advocate for economics, driven by a desire to blend analytical rigor with creative, innovative thinking.

          </div>

          <div className="mb-8 flex justify-center">
            <img src="/i.jpeg" alt="Alexandra Chen" className="rounded-lg" />
          </div>

          <div className="space-y-6 text-pretty text-base leading-relaxed text-zinc-300">
            <p>
              My high school journey has been peppered with academic excellence, including prestigious awards and accolades. I’m the author of “Echoes of a Paper Heart,” a poetry collection that explores themes of vulnerability, emotion, and human connection

            </p>

            <p>
              As the President of my school’s Theatre Club, I love exploring storytelling through diverse forms of expression. Join me as I continue this journey of creativity, exploration, and positive change!
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
