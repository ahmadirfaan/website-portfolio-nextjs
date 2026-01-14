import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <section className="py-24 space-y-10">
      <h1 className="text-4xl font-bold">Projects</h1>

      <ProjectCard
        title="Order Matching Engine"
        description="Real-time matching engine with WebSocket streaming"
        backend="Go, In-memory Order Book, Event Driven"
        frontend="Next.js, WebSocket Client"
      />
    </section>
  );
}
