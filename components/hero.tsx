import Image from "next/image";

export function Hero() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* LEFT */}
          <div className="order-2 md:order-1">
            <h1 className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Hi, I'm <span className="text-cyan-400">Ahmad Irfaan</span>
            </h1>
            <p className="mt-3 sm:mt-4 md:mt-6 text-cyan-400 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Full Stack Developer
            </p>
            <p className="mt-4 sm:mt-6 md:mt-8 text-gray-400 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
             Building mobile apps, robust backend systems, and modern, responsive web applications.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
                <span className="text-cyan-400 text-lg sm:text-xl md:text-2xl flex-shrink-0">▹</span>
                <span className="break-words">Mobile App Development</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
                <span className="text-cyan-400 text-lg sm:text-xl md:text-2xl flex-shrink-0">▹</span>
                <span className="break-words">Backend Development</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
                <span className="text-cyan-400 text-lg sm:text-xl md:text-2xl flex-shrink-0">▹</span>
                <span className="break-words">Website App Development</span>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
              <a href="https://www.linkedin.com/in/ahmadirfaan" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-black rounded-md hover:bg-cyan-400 transition-colors px-4 sm:px-6 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-sm sm:text-base md:text-base lg:text-lg font-medium text-center">
                Hire Me
              </a>
              <a href="https://wa.me/6285707121623" target="_blank" rel="noopener noreferrer" className="border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500/10 transition-colors px-4 sm:px-6 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-sm sm:text-base md:text-base lg:text-lg font-medium text-center">
                Let's Talk
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative order-1 md:order-2">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full opacity-40 -z-10"></div>
              
              {/* Image container with overlay */}
              <div className="relative rounded-xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-500/30 mx-auto max-w-sm sm:max-w-md md:max-w-full">
                {/* Gradient overlay untuk blend dengan tema */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/60 via-transparent to-cyan-500/20 z-10 pointer-events-none"></div>
                
                <Image
                  src="/hero.png"
                  alt="Profile"
                  width={600}
                  height={600}
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
    </section>
  );
}
