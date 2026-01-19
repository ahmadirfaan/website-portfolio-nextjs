import { 
  SiGo, 
  SiApachekafka, 
  SiPostgresql, 
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiKotlin,
  SiFlutter,
  SiNeo4J
} from "react-icons/si";
import { FaStream, FaNetworkWired, FaPlug, FaJava, FaCode } from "react-icons/fa";

export function TechStack() {
  const getTechIcon = (tech: string) => {
    const iconClass = "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0";
    
    switch (tech.toLowerCase()) {
      case "golang":
        return <SiGo className={iconClass} />;
      case "java":
        return <FaJava className={iconClass} />;
      case "rest":
        return <FaPlug className={iconClass} />;
      case "grpc":
        return <FaCode className={iconClass} />;
      case "kafka":
        return <SiApachekafka className={iconClass} />;
      case "event streaming":
        return <FaStream className={iconClass} />;
      case "postgresql":
        return <SiPostgresql className={iconClass} />;
      case "mysql":
        return <SiMysql className={iconClass} />;
      case "neo4j":
        return <SiNeo4J className={iconClass} />;
      case "next.js":
        return <SiNextdotjs className={iconClass} />;
      case "react":
        return <SiReact className={iconClass} />;
      case "tailwind css":
        return <SiTailwindcss className={iconClass} />;
      case "websocket":
        return <FaNetworkWired className={iconClass} />;
      case "sse":
        return <FaStream className={iconClass} />;
      case "kotlin":
        return <SiKotlin className={iconClass} />;
      case "flutter":
        return <SiFlutter className={iconClass} />;
      default:
        return null;
    }
  };

  const categories = [
    {
      title: "Backend",
      technologies: ["Golang", "Java", "REST", "gRPC", "Kafka", "Event Streaming", "PostgreSQL", "MySQL", "Neo4J"]
    },
    {
      title: "Frontend",
      technologies: ["Next.js", "React", "Tailwind CSS", "WebSocket", "SSE"]
    },
    {
      title: "Mobile",
      technologies: ["Kotlin", "Flutter"]
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
      {categories.map((category, categoryIndex) => (
        <div 
          key={categoryIndex}
          className="border border-gray-800 rounded-xl p-6 sm:p-7 md:p-8 lg:p-10 hover:border-cyan-500/50 transition-all duration-300 bg-gray-900/30 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-7 md:mb-8">
            <div className="w-1 h-8 sm:h-10 md:h-12 bg-cyan-500 rounded-full"></div>
            <h3 className="font-semibold text-cyan-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {category.title}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {category.technologies.map((tech, techIndex) => {
              const icon = getTechIcon(tech);
              return (
                <span
                  key={techIndex}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-200 text-xs sm:text-sm md:text-base lg:text-lg font-medium"
                >
                  {icon}
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
