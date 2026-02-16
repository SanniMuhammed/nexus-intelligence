'use client'
import { useEffect, useState } from 'react'
import { panicHistory } from '@/lib/data'

const PANIC_VALUE = 4
const PANIC_MAX = 10

export default function PanicMeter() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300)
    return () => clearTimeout(t)
  }, [])

  const pct = animated ? (PANIC_VALUE / PANIC_MAX) * 100 : 0

  const getColor = (v: number) => {
    if (v <= 3) return '#10b981'
    if (v <= 6) return '#f59e0b'
    return '#f43f5e'
  }

  return (
    <div className="bg-bg-card rounded-2xl border border-border overflow-hidden shadow-sm flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-border">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-muted">
          Market Panic Index
        </h2>

        <span className="text-sm px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-medium">
          Elevated
        </span>
      </div>

      {/* Score Section */}
      <div className="px-6 py-8 flex flex-col items-center">

        <div className="flex items-baseline gap-2 mb-3">
          <span
            className="text-6xl md:text-7xl font-extrabold leading-none"
            style={{ color: getColor(PANIC_VALUE) }}
          >
            {PANIC_VALUE}
          </span>
          <span className="text-2xl font-semibold text-ink-muted">
            /10
          </span>
        </div>

        <span className="text-sm text-ink-muted uppercase tracking-wide mb-8">
          Caution — Monitor Closely
        </span>

        {/* Gauge */}
        <div className="w-full mb-6">

          <div className="h-4 w-full rounded-full bg-bg-elevated relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all"
              style={{
                width: `${pct}%`,
                background:
                  'linear-gradient(90deg,#10b981 0%,#f59e0b 55%,#f43f5e 100%)',
                boxShadow: `0 0 16px ${getColor(PANIC_VALUE)}80`,
                transitionDuration: '1.4s',
              }}
            />
          </div>

          <div className="flex justify-between mt-3 text-xs text-ink-muted">
            <span>0 — Calm</span>
            <span>10 — Extreme Fear</span>
          </div>
        </div>

        {/* Sparkline */}
        <div className="w-full mt-4">
          <div className="flex items-center justify-between mb-3 text-sm text-ink-muted">
            <span className="uppercase tracking-wide">
              12-Week History
            </span>
            <span>Avg 3.7</span>
          </div>

          <div className="flex items-end gap-1 h-14">
            {panicHistory.map((v, i) => {
              const h = (v / 10) * 100
              const isCurrent = i === panicHistory.length - 1

              return (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background: isCurrent
                      ? getColor(v)
                      : `${getColor(v)}44`,
                    boxShadow: isCurrent
                      ? `0 0 10px ${getColor(v)}60`
                      : 'none',
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 border-t border-border">
        {[
          { label: '24h Δ', value: '+2.1', color: '#f59e0b' },
          { label: '7d High', value: '6.2', color: '#f43f5e' },
          { label: '7d Low', value: '1.8', color: '#10b981' },
        ].map((s, i) => (
          <div
            key={i}
            className={`px-6 py-5 text-center ${
              i < 2 ? 'border-r border-border' : ''
            }`}
          >
            <div
              className="text-xl font-bold"
              style={{ color: s.color }}
            >
              {s.value}
            </div>
            <div className="text-xs uppercase tracking-wide text-ink-muted mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}