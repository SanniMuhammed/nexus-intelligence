// app/entities/page.tsx
'use client'

import { useState } from 'react'
import { entities } from '@/lib/data'
import { EntityCard } from '@/components/entities/EntityCard'
import { getFudLevelConfig } from '@/lib/utils'

const TYPE_FILTERS = ['All', 'exchange', 'stablecoin', 'layer1', 'layer2', 'defi']
const FUD_FILTERS = ['All', 'minimal', 'low', 'medium', 'high', 'critical']

export default function EntitiesPage() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')
  const [fudFilter, setFudFilter] = useState('All')

  const filtered = entities.filter((e) => {
    const matchSearch = !search || e.name.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'All' || e.type === typeFilter
    const matchFud = fudFilter === 'All' || e.fudLevel === fudFilter
    return matchSearch && matchType && matchFud
  })

  const avgHealth = Math.round(entities.reduce((s, e) => s + e.healthScore, 0) / entities.length)
  const totalAlerts = entities.reduce((s, e) => s + e.activeAlerts, 0)
  const highRisk = entities.filter((e) => ['high', 'critical'].includes(e.fudLevel)).length

  return (
    <div className="space-y-4 max-w-[1400px] mx-auto px-3 md:px-6 lg:px-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Monitored', value: entities.length, icon: '🏛' },
          { label: 'Avg Health', value: avgHealth, icon: '💚' },
          { label: 'Alerts', value: totalAlerts, icon: '⚠️' },
          { label: 'High Risk', value: highRisk, icon: '🔥' },
        ].map((s, i) => (
          <div key={i} className="bg-bg-card rounded-xl border border-border p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{s.icon}</span>
              <span className="text-2xl font-bold text-ink-primary">{s.value}</span>
            </div>
            <div className="text-sm text-ink-muted">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Portfolio Health Bar (optional, but nice) */}
      <div className="bg-bg-card rounded-xl border border-border p-3">
        <div className="font-display text-sm font-semibold tracking-wide uppercase text-ink-muted mb-2">
          Portfolio Health
        </div>
        <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
          {entities
            .sort((a, b) => b.healthScore - a.healthScore)
            .map((e, i) => {
              let bgColor = 'bg-accent-success'
              if (e.healthScore < 40) bgColor = 'bg-accent-danger'
              else if (e.healthScore < 70) bgColor = 'bg-accent-warning'
              return (
                <div
                  key={e.id}
                  className={bgColor}
                  style={{ flex: e.healthScore }}
                  title={`${e.name}: ${e.healthScore}`}
                />
              )
            })}
        </div>
        <div className="flex justify-between mt-1 text-xs">
          <span className="text-accent-success">Excellent</span>
          <span className="text-accent-danger">At Risk</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-bg-card rounded-xl border border-border p-3 space-y-3">
        <input
          type="text"
          placeholder="Search entities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-bg-subtle border border-border rounded-lg px-3 py-2 text-base text-ink-primary placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-indigo-DEFAULT"
        />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {TYPE_FILTERS.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors ${
                typeFilter === t
                  ? 'bg-indigo-dim text-indigo-bright border border-indigo-DEFAULT/30'
                  : 'bg-bg-subtle text-ink-muted border border-border hover:bg-bg-hover'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {FUD_FILTERS.map((f) => {
            const color = f === 'All' ? '#6366f1' : getFudLevelConfig(f as any).color
            const isActive = fudFilter === f
            return (
              <button
                key={f}
                onClick={() => setFudFilter(f)}
                className="px-3 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors"
                style={{
                  backgroundColor: isActive ? `${color}15` : 'rgba(148,163,184,0.05)',
                  color: isActive ? color : '#6b7280',
                  border: `1px solid ${isActive ? `${color}30` : 'rgba(148,163,184,0.1)'}`,
                }}
              >
                {f}
              </button>
            )
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="text-base text-ink-muted">
        <span className="text-ink-primary font-semibold">{filtered.length}</span> entities
      </div>

      {/* Entity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {filtered.map((entity, i) => (
          <EntityCard key={entity.id} entity={entity} index={i} />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="bg-bg-card rounded-xl border border-border p-12 text-center">
          <div className="text-4xl mb-3">🏛</div>
          <div className="text-ink-secondary text-base">No entities match your filters</div>
        </div>
      )}
    </div>
  )
}