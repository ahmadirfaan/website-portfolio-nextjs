import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Order Matching Engine",
      description: "A real-time matching engine built with WebSocket streaming to handle transactions with high performance and low latency. Designed for financial trading platforms requiring instant order execution.",
      backend: "Go, Redis, Kafka",
      frontend: "Next.js, WebSocket Client",
      githubUrl: "#", // Replace with actual GitHub URL
      imageUrl: "/projects/order-matching.svg",
    },
    {
      title: "Rent Movie App",
      description: "A web application for movie rentals featuring live chat functionality, allowing users to interact in real-time while watching. Built with modern technologies for seamless user experience.",
      backend: "Go, Redis, PostgreSQL, Neo4J",
      frontend: "Flutter",
      githubUrl: "#", // Replace with actual GitHub URL
      imageUrl: "/projects/rent-movie.svg",
    },
    {
      title: "AI Agent",
      description: "Integration of AI Agent into company internal resources to enhance team efficiency and productivity. Leverages advanced AI capabilities to automate and optimize business processes.",
      backend: "Python, Elasticsearch, Neo4J",
      frontend: "Next.js, WebSocket Client",
      githubUrl: "#", // Replace with actual GitHub URL
      imageUrl: "/projects/ai-agent.svg",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-3 sm:mb-4 md:mb-5">
          Portfolio Projects
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
          A collection of projects I've developed, ranging from web applications to mobile apps. Each project reflects my experience and skills across various technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            backend={project.backend}
            frontend={project.frontend}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
