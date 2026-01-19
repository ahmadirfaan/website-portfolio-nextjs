import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-24 pb-32" style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)' }}>
      <div className="grid md:grid-cols-2 gap-16 items-center" style={{ gap: 'clamp(2rem, 5vw, 4rem)' }}>
          
          {/* LEFT */}
          <div>
            <h1 className="font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Hi, I'm <span className="text-cyan-400">Ahmad Irfaan</span>
            </h1>
            <p className="mt-4 text-cyan-400 font-semibold" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
              Full Stack Developer
            </p>
            <p className="mt-6 text-gray-400 max-w-md" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
             Building mobile apps, robust backend systems, and modern, responsive web applications.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-300" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                <span className="text-cyan-400">▹</span>
                <span>Mobile App Development</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                <span className="text-cyan-400">▹</span>
                <span>Backend Development</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                <span className="text-cyan-400">▹</span>
                <span>Website App Development</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="https://www.linkedin.com/in/ahmadirfaan" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-black rounded-md hover:bg-cyan-400 transition-colors" style={{ padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                Hire Me
              </a>
              <a href="https://wa.me/6285707121623" target="_blank" rel="noopener noreferrer" className="border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500/10 transition-colors" style={{ padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                Let's Talk
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full opacity-40 -z-10"></div>
              
              {/* Image container with overlay */}
              <div className="relative rounded-xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-500/30">
                {/* Gradient overlay untuk blend dengan tema */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/60 via-transparent to-cyan-500/20 z-10 pointer-events-none"></div>
                
                <Image
                  src="/hero.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full h-auto"
                  style={{
                    filter: 'contrast(0.85) brightness(1.05) saturate(0.7)',
                    maxWidth: 'clamp(250px, 50vw, 500px)',
                    height: 'auto',
                  }}
                  priority
                />
              </div>
            </div>
          </div>

        </div>
    </section>
  );
}
