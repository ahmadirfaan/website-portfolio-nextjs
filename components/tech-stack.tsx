export function TechStack() {
  return (
    <div className="py-20 grid md:grid-cols-2 gap-12" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)', gap: 'clamp(2rem, 4vw, 3rem)' }}>
      <div>
        <h3 className="font-semibold mb-4 text-cyan-400" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}>
          Backend
        </h3>
        <ul className="space-y-2 text-gray-400" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
          <li>Golang, Java</li>
          <li>REST, gRPC</li>
          <li>Kafka, Event Streaming</li>
          <li>PostgreSQL, MySQL</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-cyan-400" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}>
          Frontend
        </h3>
        <ul className="space-y-2 text-gray-400" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
          <li>Next.js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>WebSocket, SSE</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-cyan-400" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}>
          Mobile
        </h3>
        <ul className="space-y-2 text-gray-400" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
          <li>Kotlin</li>
          <li>Flutter</li>
        </ul>
      </div>
    </div>
  );
}
