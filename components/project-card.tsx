import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export function ProjectCard({
  title,
  description,
  backend,
  frontend,
  githubUrl,
  imageUrl,
}: {
  title: string;
  description: string;
  backend: string;
  frontend: string;
  githubUrl?: string;
  imageUrl?: string;
}) {
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 bg-gray-900/30 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-cyan-500/10">
      {/* Preview Image */}
      {imageUrl && (
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gray-800">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-4 sm:p-5 md:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-3 sm:mb-4">
          <h3 className="font-semibold text-cyan-400 text-lg sm:text-xl md:text-2xl lg:text-3xl flex-1">
            {title}
          </h3>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex-shrink-0 p-2 hover:bg-gray-800 rounded-lg"
              aria-label={`View ${title} on GitHub`}
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          )}
        </div>
        
        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-5 md:mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <div className="flex-1 min-w-[200px]">
            <p className="text-cyan-400 font-semibold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">Backend</p>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">{backend}</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <p className="text-cyan-400 font-semibold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">Frontend</p>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">{frontend}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
