import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="space-y-2">

      <Link href="/" className="block px-4 py-2 rounded-lg hover:bg-white/10">
        Dashboard
      </Link>

      <Link href="/entities" className="block px-4 py-2 rounded-lg hover:bg-white/10">
        Entities
      </Link>

      <Link href="/influencers" className="block px-4 py-2 rounded-lg hover:bg-white/10">
        Influencers
      </Link>

      <Link href="/fud" className="block px-4 py-2 rounded-lg hover:bg-white/10">
        FUD
      </Link>

    </div>
  );
}