import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <section className="py-24 space-y-10" style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}>
      <h1 className="font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Projects</h1>

      <ProjectCard
        title="Order Matching Engine"
        description="Real-time matching engine with WebSocket streaming"
        backend="Go, Redis, Kafka"
        frontend="Next.js, WebSocket Client"
      />

      <ProjectCard
        title="Rent Movie App"
        description="Rent movie web app including live chat"
        backend="Go, Redis, Postgres SQL, Neo4J"
        frontend="Flutter"
      />

      <ProjectCard
        title="AI Agent"
        description="Integrate AI Agent to internal resources company"
        backend="Python, Elastic Search, Neo4J"
        frontend="Next.js, WebSocket Client"
      />
    </section>
  );
}
