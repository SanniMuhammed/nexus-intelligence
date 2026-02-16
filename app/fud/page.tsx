// app/fud/page.tsx
'use client'

import Link from 'next/link'
import { fudEvents } from '@/lib/data'
import { getSeverityConfig, getVerdictConfig } from '@/lib/utils'
import { formatDistanceToNow, isValid } from 'date-fns'

// Reuse the same VerdictBadge from FudFeed or redefine here
const VerdictBadge = ({ verdictType }) => {
  const verd = getVerdictConfig(verdictType)
  return (
    <div
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-sm font-medium"
      style={{
        backgroundColor: `${verd.color}10`,
        color: verd.color,
        borderColor: `${verd.color}30`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: verd.color }} />
      {verd.label}
    </div>
  )
}

const formatSafeDate = (timestamp) => {
  const date = new Date(timestamp)
  return isValid(date) ? formatDistanceToNow(date, { addSuffix: true }) : 'Invalid date'
}

export default function FudPage() {
  return (
    <div className="space-y-4 max-w-[1400px] mx-auto px-3 md:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-ink-primary">FUD Feed</h1>
        <span className="text-sm px-3 py-1.5 rounded-lg bg-rose-dim/10 text-rose-bright border border-rose-DEFAULT/20">
          {fudEvents.length} events
        </span>
      </div>

      {/* List */}
      <div className="bg-bg-card rounded-xl border border-border overflow-hidden">
        {fudEvents.map((event) => {
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
              className="flex gap-2 px-3 md:px-6 py-3 border-b border-border last:border-b-0 hover:bg-bg-hover/50 transition-colors"
            >
              {/* Severity bar */}
              <div
                className="flex-shrink-0 w-1 rounded-full self-stretch"
                style={{ backgroundColor: sev.color }}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-display text-base font-semibold text-ink-primary">
                    {event.source}
                  </span>
                  <span className="font-mono text-sm" style={{ color: trustColor }}>
                    {event.trustScore}/100
                  </span>
                  <time
                    dateTime={event.timestamp}
                    className="font-mono text-sm text-ink-muted ml-auto"
                  >
                    {timeAgo}
                  </time>
                </div>

                <p className="text-base text-ink-secondary leading-relaxed mb-2">
                  {event.headline}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  <VerdictBadge verdictType={event.verdictType} />
                  <span
                    className="ml-auto font-display text-xl font-bold"
                    style={{ color: sev.color }}
                  >
                    {event.impactScore.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Back link (optional) */}
      <div className="flex justify-center">
        <Link href="/" className="text-sm text-ink-muted hover:text-ink-primary transition-colors">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  )
}