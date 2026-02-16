'use client'

import { fudEvents } from '@/lib/data'
import { getSeverityConfig } from '@/lib/utils'

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-4 space-y-6">

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-bg-card rounded-lg p-4 shadow-sm">
          <div className="text-sm text-ink-muted">Narrative Risk</div>
          <div className="text-xl font-bold text-green-400">5.4</div>
          <div className="text-xs text-ink-muted">Stable</div>
        </div>
        <div className="bg-bg-card rounded-lg p-4 shadow-sm">
          <div className="text-sm text-ink-muted">Active FUD</div>
          <div className="text-xl font-bold">{fudEvents.length}</div>
        </div>
        <div className="bg-bg-card rounded-lg p-4 shadow-sm">
          <div className="text-sm text-ink-muted">High Severity</div>
          <div className="text-xl font-bold text-red-500">
            {fudEvents.filter(e => e.severity === 'high').length}
          </div>
        </div>
        <div className="bg-bg-card rounded-lg p-4 shadow-sm">
          <div className="text-sm text-ink-muted">Signal Confidence</div>
          <div className="text-xl font-bold text-green-400">97%</div>
        </div>
      </div>

      {/* Highest Impact FUD Events */}
      <div className="bg-bg-card rounded-xl border border-border overflow-hidden">
        <div className="px-4 py-2 border-b border-border font-semibold text-ink-muted">
          Highest Impact FUD Events
        </div>
        {fudEvents.map((event) => {
          const sev = getSeverityConfig(event.severity)
          const trustColor =
            event.trustScore > 60
              ? 'text-green-400'
              : event.trustScore > 30
              ? 'text-yellow-400'
              : 'text-red-500'

          return (
            <div
              key={event.id}
              className="flex flex-col md:flex-row justify-between gap-2 px-4 py-2 border-b border-border last:border-b-0 hover:bg-bg-hover/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-ink-primary truncate">{event.source}</div>
                <p className="text-sm text-ink-secondary truncate">{event.headline}</p>
                <div className="text-xs text-ink-muted mt-1">Invalid date</div>
              </div>
              <div className="flex flex-col items-end">
                <div className={`${trustColor} font-mono text-sm`}>Trust: {event.trustScore}/100</div>
                <div className="text-green-400 font-bold">{event.impactScore.toFixed(1)}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}