'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const routeTitles: Record<string, { title: string; sub: string }> = {
  '/': { title: 'Overview', sub: 'Real-time crypto intelligence' },
  '/fud': { title: 'FUD Radar', sub: 'Active disinformation events' },
  '/influencers': { title: 'Influencers', sub: '247 accounts tracked' },
  '/entities': { title: 'Entities', sub: '42 entities monitored' },
}

export default function TopBar() {
  const pathname = usePathname()
  const route = routeTitles[pathname] ?? routeTitles['/']
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const h = String(now.getUTCHours()).padStart(2,'0')
      const m = String(now.getUTCMinutes()).padStart(2,'0')
      setTime(`${h}:${m}`)
    }
    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-bg-subtle/90 backdrop-blur-xl border-b border-border px-4 sm:px-6 py-4 flex items-center justify-between">

      <div>
        <h1 className="font-display font-bold text-lg md:text-xl text-ink-DEFAULT">
          {route.title}
        </h1>
        <p className="text-sm text-ink-muted hidden sm:block">
          {route.sub}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-ink-muted hidden sm:block">
          {time} UTC
        </span>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-dim border border-emerald-DEFAULT/20">
          <span className="w-2 h-2 rounded-full bg-emerald-DEFAULT animate-pulse" />
          <span className="font-mono text-xs text-emerald-bright uppercase">
            Live
          </span>
        </div>

        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-DEFAULT to-cyan-DEFAULT flex items-center justify-center text-sm font-bold text-white">
          AK
        </div>
      </div>
    </header>
  )
}