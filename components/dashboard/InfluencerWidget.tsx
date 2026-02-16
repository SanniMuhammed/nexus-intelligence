'use client'

import { useState } from 'react'
import Link from 'next/link'
import { influencers } from '@/lib/data'
import { getTierConfig } from '@/lib/utils'
import { cn } from '@/lib/utils'

const getBarColorClass = (score: number) => {
  if (score >= 70) return 'bg-emerald-500'
  if (score >= 40) return 'bg-amber-500'
  return 'bg-rose-500'
}

export default function InfluencerWidget({ loading = false }) {
  const [tab, setTab] = useState<'trusted' | 'untrusted'>('trusted')
  const totalInfluencers = influencers.length

  const sorted = [...influencers]
    .sort((a, b) =>
      tab === 'trusted'
        ? b.trustScore - a.trustScore
        : a.trustScore - b.trustScore
    )
    .slice(0, 5)

  if (loading) {
    return (
      <div className="bg-bg-card rounded-2xl border border-border overflow-hidden animate-pulse">
        <div className="h-14 bg-bg-hover/40" />
        <div className="flex border-b border-border">
          <div className="flex-1 h-12 bg-bg-hover/40" />
          <div className="flex-1 h-12 bg-bg-hover/40" />
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 px-6 py-5">
            <div className="w-8 h-4 bg-bg-hover/50 rounded" />
            <div className="flex-1 space-y-3">
              <div className="h-4 bg-bg-hover/50 rounded w-3/4" />
              <div className="h-3 bg-bg-hover/50 rounded w-full" />
            </div>
            <div className="w-14 h-10 bg-bg-hover/50 rounded" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-bg-card rounded-2xl border border-border overflow-hidden shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-border">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-muted">
          Trust Index
        </h2>

        <span className="text-sm px-3 py-1.5 rounded-full bg-indigo-DEFAULT/10 text-indigo-bright border border-indigo-DEFAULT/20 font-medium">
          {totalInfluencers}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border bg-bg-elevated/30">
        {(['trusted', 'untrusted'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              'flex-1 py-4 text-sm font-semibold uppercase tracking-wide transition-all',
              tab === t
                ? t === 'trusted'
                  ? 'text-emerald-500 border-b-2 border-emerald-500 bg-emerald-500/5'
                  : 'text-rose-500 border-b-2 border-rose-500 bg-rose-500/5'
                : 'text-ink-muted hover:text-ink-secondary'
            )}
          >
            {t === 'trusted' ? 'Trusted' : 'Risky'}
          </button>
        ))}
      </div>

      {/* List */}
      <div>
        {sorted.map((inf, i) => {
          const tier = getTierConfig(inf.tier)
          const barColor = getBarColorClass(inf.trustScore)
          const rank = String(i + 1).padStart(2, '0')

          return (
            <div
              key={inf.id}
              className="flex items-center gap-5 px-6 py-5 border-b border-border last:border-b-0 hover:bg-bg-hover/40 transition-colors"
            >
              {/* Rank */}
              <div className="w-8 text-center font-mono text-sm text-ink-muted flex-shrink-0">
                {i === 0 && tab === 'trusted' ? '👑' : rank}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">

                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base font-semibold text-ink-primary truncate">
                    {inf.name}
                  </span>

                  {inf.verified && (
                    <span className="w-5 h-5 rounded-full bg-indigo-DEFAULT flex items-center justify-center text-xs text-white">
                      ✓
                    </span>
                  )}
                </div>

                <div className="text-sm text-ink-muted mb-3 truncate">
                  {inf.handle}
                </div>

                <div className="h-2 w-full bg-bg-elevated rounded-full overflow-hidden">
                  <div
                    className={cn('h-full rounded-full transition-all', barColor)}
                    style={{ width: `${inf.trustScore}%` }}
                  />
                </div>
              </div>

              {/* Score */}
              <div className="text-right flex-shrink-0 ml-3">
                <div
                  className="text-2xl font-bold"
                  style={{ color: tier.color }}
                >
                  {inf.trustScore}
                </div>
                <div className="text-xs uppercase tracking-wide text-ink-muted">
                  Trust
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-border">
        <Link href="/influencers">
          <button className="w-full text-sm text-ink-muted border border-border rounded-xl py-3 hover:bg-bg-hover transition-colors">
            Full Leaderboard →
          </button>
        </Link>
      </div>
    </div>
  )
}