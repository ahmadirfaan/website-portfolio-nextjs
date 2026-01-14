export function Hero() {
  return (
    <section className="py-32 max-w-3xl">
      <h1 className="text-5xl font-bold leading-tight">
        Fullstack Engineer
        <span className="block text-cyan-400 mt-2">
          Backend-first mindset.
        </span>
      </h1>

      <p className="mt-6 text-gray-400 text-lg">
        Building scalable backend systems with Go & Java,
        and delivering them through modern web interfaces.
      </p>

      <div className="mt-10 flex gap-4">
        <a className="px-6 py-3 bg-cyan-500 text-black rounded-md">
          View Projects
        </a>
        <a className="px-6 py-3 border border-gray-700 rounded-md">
          GitHub
        </a>
      </div>
    </section>
  );
}
