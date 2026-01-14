export function ProjectCard({
  title,
  description,
  backend,
  frontend,
}: any) {
  return (
    <div className="border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>

      <div className="mt-4 text-sm text-gray-500">
        <p><b>Backend:</b> {backend}</p>
        <p><b>Frontend:</b> {frontend}</p>
      </div>
    </div>
  );
}
