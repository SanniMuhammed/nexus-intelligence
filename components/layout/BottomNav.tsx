"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Entities", href: "/entities" },
    { name: "Influencers", href: "/influencers" },
    { name: "FUD", href: "/fud" },   // 🔥 THIS IS THE IMPORTANT ONE
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0b0b14] border-t border-white/10 flex justify-around py-3 z-50">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm ${
            pathname === item.href
              ? "text-white"
              : "text-white/50"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}