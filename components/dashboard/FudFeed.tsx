'use client'

import Link from 'next/link'
import { fudEvents } from '@/lib/data'
import { getSeverityConfig, getVerdictConfig } from '@/lib/utils'
import { formatDistanceToNow, isValid } from 'date-fns'

const VerdictBadge = ({ verdictType }: { verdictType: string }) => {
  const verd = getVerdictConfig(verdictType)

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border"
      style={{
        backgroundColor: `${verd.color}12`,
        color: verd.color,
        borderColor: `${verd.color}30`,
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: verd.color }}
      />
      {verd.label}
    </div>
  )
}

export default function FudFeed({ loading = false }) {
  const preview = fudEvents.slice(0, 3)
  const totalEvents = fudEvents.length

  const formatSafeDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return isValid(date)
      ? formatDistanceToNow(date, { addSuffix: true })
      : 'Invalid date'
  }

  if (loading) {
    return (
      <div className="bg-bg-card rounded-2xl border border-border overflow-hidden animate-pulse">
        <div className="h-14 bg-bg-hover/40" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="px-6 py-5 border-b border-border">
            <div className="flex gap-4">
              <div className="w-1 bg-bg-elevated rounded-full" />
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-bg-hover/50 rounded w-3/4" />
                <div className="h-4 bg-bg-hover/50 rounded w-full" />
                <div className="h-4 bg-bg-hover/50 rounded w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-bg-card rounded-2xl border border-border overflow-hidden shadow-sm">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 border-b border-border">

        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-muted">
            Live FUD Feed
          </h2>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20 font-medium">
            {totalEvents} active
          </span>

          <Link href="/fud">
            <button className="text-sm text-ink-muted border border-border px-3 py-1.5 rounded-lg hover:bg-bg-hover transition-colors">
              All →
            </button>
          </Link>
        </div>
      </div>

      {/* Items */}
      <div>
        {preview.map((event) => {
          const sev = getSeverityConfig(event.severity)
          const timeAgo = formatSafeDate(event.timestamp)

          const trustColor =
            event.trustScore > 60
              ? '#10b981'
              : event.trustScore > 30
              ? '#f59e0b'
              : '#f43f5e'

          return (
            <div
              key={event.id}
              className="flex gap-4 px-6 py-6 border-b border-border last:border-b-0 hover:bg-bg-hover/40 transition-colors"
            >
              {/* Severity bar */}
              <div
                className="flex-shrink-0 w-1.5 rounded-full self-stretch"
                style={{ backgroundColor: sev.color }}
              />

              <div className="flex-1 min-w-0">

                {/* Top row */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-base font-semibold text-ink-primary">
                    {event.source}
                  </span>

                  <span
                    className="font-mono text-sm font-medium"
                    style={{ color: trustColor }}
                  >
                    {event.trustScore}/100
                  </span>

                  <time
                    dateTime={event.timestamp}
                    className="text-sm text-ink-muted ml-auto"
                  >
                    {timeAgo}
                  </time>
                </div>

                {/* Headline */}
                <p className="text-base text-ink-secondary leading-relaxed mb-4 line-clamp-2">
                  {event.headline}
                </p>

                {/* Bottom row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <VerdictBadge verdictType={event.verdictType} />

                  <div className="ml-auto text-right">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: sev.color }}
                    >
                      {event.impactScore.toFixed(1)}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-ink-muted">
                      Impact
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-border">
        <Link href="/fud" className="block">
          <button className="w-full text-sm text-ink-muted border border-border rounded-xl py-3 hover:bg-bg-hover transition-colors">
            View all {totalEvents} events →
          </button>
        </Link>
      </div>
    </div>
  )
}