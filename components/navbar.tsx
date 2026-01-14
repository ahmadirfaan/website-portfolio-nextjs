import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <span className="font-semibold text-lg">Your Name</span>

      <div className="flex gap-6 text-sm text-gray-400">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="https://github.com/yourname">GitHub</Link>
      </div>
    </nav>
  );
}
