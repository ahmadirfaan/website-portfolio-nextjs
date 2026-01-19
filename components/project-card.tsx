export function ProjectCard({
  title,
  description,
  backend,
  frontend,
}: any) {
  return (
    <div className="border border-gray-800 rounded-xl" style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
      <h3 className="font-semibold text-cyan-400" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}>{title}</h3>
      <p className="text-gray-400 mt-2" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>{description}</p>

      <div className="mt-4 text-gray-500" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
        <p><b>Backend:</b> {backend}</p>
        <p><b>Frontend:</b> {frontend}</p>
      </div>
    </div>
  );
}
