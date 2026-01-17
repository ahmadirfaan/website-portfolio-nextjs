import Image from "next/image";
import { Container } from "./container";

export function Hero() {
  return (
    <section className="pt-24 pb-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-cyan-400">Ahmad Irfaan</span>
            </h1>
            <p className="mt-4 text-xl text-cyan-400 font-semibold">
              Full Stack Developer
            </p>
            <p className="mt-6 text-gray-400 max-w-md">
             Building mobile apps, robust backend systems, and modern, responsive web applications.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">▹</span>
                <span>Mobile App Development</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">▹</span>
                <span>Backend Development</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">▹</span>
                <span>Website App Development</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a className="px-6 py-3 bg-cyan-500 text-black rounded-md hover:bg-cyan-400 transition-colors">
                Hire Me
              </a>
              <a className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500/10 transition-colors">
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
                  }}
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
