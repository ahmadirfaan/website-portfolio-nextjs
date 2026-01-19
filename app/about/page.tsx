export default function AboutPage() {
    const timeline = [
      {
        period: "2021 - Now",
        description: "Currently working as a Software Development Engineer at an E-Wallet company in Indonesia. Dedicated to building scalable web applications and mobile solutions that impact millions of users daily. Specializing in high-performance backend systems and modern frontend technologies."
      },
      {
        period: "2020 - 2021",
        description: "Made a career transition to IT by joining Enigma Bootcamp, where I mastered the fundamentals of software development and cutting-edge technologies. This intensive program equipped me with both technical skills and industry best practices."
      },
      {
        period: "2019 - 2020",
        description: "Worked as a Project Administrator, managing and coordinating various administrative projects. This experience strengthened my organizational skills and project management capabilities, providing a solid foundation for technical roles."
      },
      {
        period: "2014 - 2019",
        description: "Pursued higher education and developed core knowledge and skills. During this period, I built a strong academic foundation while exploring my passion for technology and problem-solving."
      }
    ];

    return (
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-3 sm:mb-4 md:mb-5">
            About Me
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in building robust web applications and mobile solutions. With experience working in fintech, I understand the importance of creating reliable, scalable, and user-friendly applications. Let me help bring your ideas to life.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-cyan-500/30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-12 sm:pl-16 md:pl-20 lg:pl-24">
                {/* Timeline Dot */}
                <div className="absolute left-2 sm:left-4 md:left-6 top-1.5 sm:top-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-cyan-500 border-2 sm:border-4 border-[#0A192F] shadow-lg shadow-cyan-500/50"></div>
                </div>
                
                {/* Content */}
                <div className="border border-gray-800 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 hover:border-cyan-500/50 transition-colors bg-gray-900/30">
                  <div className="text-cyan-400 font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 md:mb-4">
                    {item.period}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }