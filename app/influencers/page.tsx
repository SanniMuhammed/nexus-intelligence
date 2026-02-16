'use client'
import { useState, useEffect } from 'react'
import { influencers } from '@/lib/data'
import { getTierConfig, getTrustBarColor } from '@/lib/utils'
import { cn } from '@/lib/utils'

function InfluencerCard({ inf, index, animated }: { inf: typeof influencers[0], index: number, animated: boolean }) {
  const tier = getTierConfig(inf.tier)
  const barColor = getTrustBarColor(inf.trustScore)

  return (
    <div className="bg-bg-card rounded-2xl border border-border overflow-hidden relative group hover:border-border-strong transition-all duration-300 card-in"
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
      <div className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg,transparent,${tier.color}80,transparent)` }} />

      <div className="p-4 md:p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-lg font-bold text-white"
            style={{ background: `linear-gradient(135deg,${tier.color}40,${tier.color}20)`, border:`1px solid ${tier.color}30` }}>
            {inf.name.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
              <span className="font-display text-[14px] font-bold text-ink-DEFAULT">{inf.name}</span>
              {inf.verified && (
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-indigo-DEFAULT flex items-center justify-center text-[9px] text-white">✓</span>
              )}
              <span className="badge ml-auto" style={{ background: tier.bg, color: tier.color, border:`1px solid ${tier.border}` }}>
                {tier.label}
              </span>
            </div>
            <div className="font-mono text-[11px] text-ink-muted">{inf.handle} · {inf.followers}</div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[12px] text-ink-muted leading-relaxed line-clamp-2 mb-4">{inf.bio}</p>

        {/* Trust score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">Trust Score</span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-[20px] font-extrabold leading-none" style={{ color: tier.color }}>{inf.trustScore}</span>
              <span className="font-mono text-[10px] text-ink-muted">/100</span>
            </div>
          </div>
          <div className="h-2 w-full bg-bg-elevated rounded-full overflow-hidden">
            <div className={cn('h-full rounded-full bg-gradient-to-r transition-all', barColor)}
              style={{ width: animated ? `${inf.trustScore}%` : '0%', transitionDuration: `${1.2 + index * 0.05}s` }} />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Followers', value: inf.followers },
            { label: 'Accurate', value: `${inf.accurateCallsCount}`, color: '#10b981' },
            { label: 'FUD', value: `${inf.fudCount}`, color: inf.fudCount > 10 ? '#f43f5e' : inf.fudCount > 3 ? '#f59e0b' : '#94a3b8' },
          ].map((s, i) => (
            <div key={i} className="bg-bg-subtle rounded-xl p-2.5 text-center border border-border">
              <div className="font-display text-[14px] font-bold" style={{ color: s.color ?? '#f1f5f9' }}>{s.value}</div>
              <div className="font-mono text-[9px] text-ink-muted uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 md:px-5 pb-4 pt-3 border-t border-border flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {inf.tags.slice(0,2).map(tag => (
            <span key={tag} className="font-mono text-[9px] px-2 py-0.5 rounded bg-bg-elevated text-ink-muted border border-border uppercase">
              #{tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-[10px]"
          style={{ color: inf.weeklyChange > 0 ? '#10b981' : inf.weeklyChange < 0 ? '#f43f5e' : '#94a3b8' }}>
          {inf.weeklyChange > 0 ? `▲+${inf.weeklyChange}` : inf.weeklyChange < 0 ? `▼${inf.weeklyChange}` : '→0'} 7d
        </span>
      </div>
    </div>
  )
}

const TIERS = ['All', 'elite', 'trusted', 'neutral', 'risky', 'malicious']

export default function InfluencersPage() {
  const [search, setSearch] = useState('')
  const [tierFilter, setTierFilter] = useState('All')
  const [sort, setSort] = useState('Trust ↓')
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300)
    return () => clearTimeout(t)
  }, [])

  const filtered = influencers
    .filter(inf => {
      const matchSearch = !search ||
        inf.name.toLowerCase().includes(search.toLowerCase()) ||
        inf.handle.toLowerCase().includes(search.toLowerCase())
      const matchTier = tierFilter === 'All' || inf.tier === tierFilter
      return matchSearch && matchTier
    })
    .sort((a, b) => {
      if (sort === 'Trust ↓') return b.trustScore - a.trustScore
      if (sort === 'Trust ↑') return a.trustScore - b.trustScore
      if (sort === 'FUD Count') return b.fudCount - a.fudCount
      return 0
    })

  const tierColors: Record<string, string> = {
    elite: '#22d3ee', trusted: '#10b981', neutral: '#94a3b8', risky: '#f59e0b', malicious: '#f43f5e'
  }

  return (
    <div className="space-y-4 max-w-[1400px] mx-auto">
      {/* Tier summary — scrollable on mobile */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {TIERS.filter(t => t !== 'All').map((tier, i) => {
          const config = getTierConfig(tier as any)
          const count = influencers.filter(inf => inf.tier === tier).length
          return (
            <div key={tier}
              className="bg-bg-card rounded-2xl border border-border p-4 cursor-pointer hover:border-border-strong transition-all card-in flex-shrink-0 w-28"
              style={{animationDelay:`${i*0.05}s`}}
              onClick={() => setTierFilter(tierFilter === tier ? 'All' : tier)}>
              <div className="font-display text-[22px] font-extrabold mb-1" style={{ color: config.color }}>{count}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: config.color }}>{config.label}</div>
            </div>
          )
        })}
      </div>

      {/* Search + filters */}
      <div className="bg-bg-card rounded-2xl border border-border p-3 md:p-4 space-y-3 card-in" style={{animationDelay:'0.25s'}}>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-bg-subtle border border-border rounded-xl px-3 py-2.5 flex-1">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="text-ink-muted flex-shrink-0">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}
              className="bg-transparent text-[13px] text-ink-DEFAULT placeholder:text-ink-muted outline-none flex-1" />
            {search && <button onClick={() => setSearch('')} className="text-ink-muted text-[16px]">×</button>}
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="bg-bg-subtle border border-border rounded-xl px-3 py-2.5 text-[12px] text-ink-secondary outline-none cursor-pointer flex-shrink-0">
            {['Trust ↓','Trust ↑','FUD Count'].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Tier pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {TIERS.map(t => {
            const color = t === 'All' ? '#6366f1' : tierColors[t]
            const isActive = tierFilter === t
            return (
              <button key={t} onClick={() => setTierFilter(t)}
                className="px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all capitalize whitespace-nowrap flex-shrink-0"
                style={{
                  background: isActive ? `${color}15` : 'rgba(148,163,184,0.05)',
                  color: isActive ? color : '#475569',
                  border: `1px solid ${isActive ? `${color}35` : 'rgba(148,163,184,0.1)'}`,
                }}>
                {t}
              </button>
            )
          })}
        </div>
      </div>

      <div className="text-[12px] text-ink-muted">
        <span className="text-ink-secondary font-semibold">{filtered.length}</span> influencers
      </div>

      {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((inf, i) => (
          <InfluencerCard key={inf.id} inf={inf} index={i} animated={animated} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="bg-bg-card rounded-2xl border border-border p-12 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <div className="text-ink-secondary font-medium">No influencers found</div>
        </div>
      )}
    </div>
  )
}
