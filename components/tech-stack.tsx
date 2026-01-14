export function TechStack() {
  return (
    <section className="py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">
          Backend
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>Golang, Java</li>
          <li>REST, gRPC</li>
          <li>Kafka, Event Streaming</li>
          <li>PostgreSQL, MySQL</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">
          Frontend
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li>Next.js (App Router)</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>WebSocket, SSE</li>
        </ul>
      </div>
    </section>
  );
}
