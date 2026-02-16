'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { entities } from '@/lib/data'
import { getHealthColor, getFudLevelConfig } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function EntityMiniGrid() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 500)
    return () => clearTimeout(t)
  }, [])

  const preview = entities.slice(0, 5)

  return (
    <div className="bg-bg-card rounded-2xl border border-border overflow-hidden shadow-sm">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 border-b border-border">

        <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-muted">
          Entity Health
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-sm px-3 py-1 rounded-full bg-indigo-DEFAULT/10 text-indigo-bright border border-indigo-DEFAULT/20 font-medium">
            42
          </span>

          <Link href="/entities">
            <button className="text-sm text-ink-muted border border-border px-3 py-1.5 rounded-lg hover:bg-bg-hover transition-colors">
              All →
            </button>
          </Link>
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-border">
        {preview.map((entity) => {
          const health = getHealthColor(entity.healthScore)
          const fud = getFudLevelConfig(entity.fudLevel)

          return (
            <div
              key={entity.id}
              className="flex items-center gap-4 px-6 py-5 hover:bg-bg-hover/40 transition-colors"
            >
              {/* Logo */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${entity.color}18` }}
              >
                {entity.emoji}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">

                {/* Name + Status */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-semibold text-ink-primary truncate">
                    {entity.name}
                  </span>

                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-medium"
                      style={{ color: fud.color }}
                    >
                      {fud.label}
                    </span>

                    {entity.activeAlerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-rose-500/10 text-rose-500 border border-rose-500/20 font-medium">
                        {entity.activeAlerts} Alerts
                      </span>
                    )}
                  </div>
                </div>

                {/* Health Bar */}
                <div className="h-2 w-full bg-bg-elevated rounded-full overflow-hidden">
                  <div
                    className={cn(
                      'h-full rounded-full bg-gradient-to-r transition-all',
                      health.gradient
                    )}
                    style={{
                      width: animated ? `${entity.healthScore}%` : '0%',
                      transitionDuration: '1.2s',
                    }}
                  />
                </div>
              </div>

              {/* Score */}
              <div className="text-right flex-shrink-0 ml-3">
                <div
                  className="text-xl font-bold"
                  style={{ color: health.text }}
                >
                  {entity.healthScore}
                </div>
                <div className="text-xs text-ink-muted uppercase tracking-wide">
                  Health
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-border">
        <Link href="/entities">
          <button className="w-full text-sm text-ink-muted border border-border rounded-xl py-2.5 hover:bg-bg-hover transition-colors">
            View all 42 entities →
          </button>
        </Link>
      </div>
    </div>
  )
}