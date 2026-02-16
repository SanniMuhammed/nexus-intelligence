'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen flex w-full overflow-x-hidden">

        {/* Mobile Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
            open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-bg-card border-r border-border z-50 transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static`}
        >
          <div className="flex items-center justify-between h-14 px-6 border-b border-border">
            <span className="font-semibold text-lg">
              Nexus
            </span>

            <button
              onClick={() => setOpen(false)}
              className="lg:hidden text-lg"
            >
              ✕
            </button>
          </div>

          {/* 🔥 NAVIGATION */}
          <nav className="p-6 space-y-5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block text-base text-ink-muted hover:text-ink-primary transition-colors"
            >
              Dashboard
            </Link>

            <Link
              href="/influencers"
              onClick={() => setOpen(false)}
              className="block text-base text-ink-muted hover:text-ink-primary transition-colors"
            >
              Influencers
            </Link>

            <Link
              href="/entities"
              onClick={() => setOpen(false)}
              className="block text-base text-ink-muted hover:text-ink-primary transition-colors"
            >
              Entities
            </Link>

            {/* ✅ FUD LINK ADDED HERE */}
            <Link
              href="/fud"
              onClick={() => setOpen(false)}
              className="block text-base text-ink-muted hover:text-ink-primary transition-colors"
            >
              FUD
            </Link>
          </nav>
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col w-0 min-w-0">

          {/* Mobile Topbar */}
          <div className="lg:hidden flex items-center h-14 px-4 border-b border-border bg-bg-card">
            <button
              onClick={() => setOpen(true)}
              className="text-xl"
            >
              ☰
            </button>

            <span className="ml-4 font-semibold text-base">
              Dashboard
            </span>
          </div>

          {/* Page Content */}
          <main className="flex-1 w-full px-4 sm:px-6 lg:px-10 py-6 overflow-x-hidden">
            <div className="max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>

        </div>
      </div>
    </>
  )
}