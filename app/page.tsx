'use client'

import { useState } from 'react'

/* ---------------- SAMPLE DATA ---------------- */

const fudFeed = [
  { id: 1, source: 'Binance', headline: 'Withdrawal delay rumor spreading', trustScore: 42, severity: 3 },
  { id: 2, source: 'Ethereum', headline: 'Validator centralization debate', trustScore: 61, severity: 2 },
  { id: 3, source: 'Solana', headline: 'Network instability speculation', trustScore: 75, severity: 1 },
]

const topSpreaders = [
  { name: '@FUDKing', riskScore: 88 },
  { name: '@CryptoDrama', riskScore: 76 },
  { name: '@ChainWatcher', riskScore: 71 },
]

const targetedEntities = [
  { name: 'Binance', pressure: 84 },
  { name: 'Ethereum', pressure: 67 },
  { name: 'Solana', pressure: 61 },
]

const influencerRanking = [
  { name: '@TopInfluencer', trustScore: 94 },
  { name: '@ResearchAlpha', trustScore: 89 },
  { name: '@ChainInsight', trustScore: 82 },
]

const topEntities = [
  { name: 'Bitcoin', health: 92 },
  { name: 'Ethereum', health: 85 },
  { name: 'Binance', health: 79 },
]

/* ---------------- HELPERS ---------------- */

const severityColor = (level: number) => {
  if (level === 3) return 'bg-red-500'
  if (level === 2) return 'bg-yellow-500'
  return 'bg-emerald-500'
}

/* ---------------- PAGE ---------------- */

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <div className="min-h-screen bg-[#05070d] text-white px-6 lg:px-16 py-10 space-y-16">

      {/* 1. PANIC METER */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Panic Meter</h2>
        <div className="bg-red-900/30 border border-red-500/30 p-6 rounded-lg">
          <div className="flex justify-between">
            <span className="text-xl font-bold text-red-400">
              Elevated Market Panic
            </span>
            <span className="bg-red-500 px-3 py-1 text-sm rounded">
              HIGH
            </span>
          </div>
          <div className="mt-4 h-2 bg-white/10 rounded-full">
            <div className="h-2 bg-red-500 w-4/5 rounded-full" />
          </div>
        </div>
      </section>

      {/* 2. LIVE FUD FEED */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Live FUD Feed</h2>
        <div className="space-y-3">
          {fudFeed.map(item => (
            <div key={item.id} className="bg-[#0b0f17] border border-white/10 p-4 rounded-lg flex gap-4 items-center">
              <div className={`w-1 h-12 rounded ${severityColor(item.severity)}`} />
              <div className="flex-1">
                <p className="font-semibold">{item.source}</p>
                <p className="text-white/60 text-sm">{item.headline}</p>
              </div>
              <span className="font-mono text-sm">{item.trustScore}/100</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STAT CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total FUD Events', value: 134 },
          { label: 'Active Spreaders', value: 27 },
          { label: 'Entities Under Pressure', value: 12 },
        ].map((card, i) => (
          <div key={i} className="bg-[#0b0f17] border border-white/10 p-6 rounded-lg">
            <p className="text-white/50 text-sm">{card.label}</p>
            <p className="text-2xl font-bold mt-1">{card.value}</p>
          </div>
        ))}
      </section>

      {/* 4. FUD DETECTION SEARCH */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">FUD Detection Search</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search influencer, entity, narrative..."
          className="w-full bg-[#0b0f17] border border-white/10 p-4 rounded-lg text-white"
        />
      </section>

      {/* 5. TOP FUD SPREADERS TODAY */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Top FUD Spreaders Today</h2>
        <div className="space-y-2">
          {topSpreaders.map((spreader, i) => (
            <div key={i} className="flex justify-between bg-[#0b0f17] p-4 border border-white/10 rounded-lg">
              <span>{spreader.name}</span>
              <span className="text-red-400 font-mono">{spreader.riskScore}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. MOST TARGETED ENTITIES */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Most Targeted Entities</h2>
        <div className="space-y-2">
          {targetedEntities.map((entity, i) => (
            <div key={i} className="flex justify-between bg-[#0b0f17] p-4 border border-white/10 rounded-lg">
              <span>{entity.name}</span>
              <span className="text-yellow-400 font-mono">{entity.pressure}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. AI VERDICT SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">AI Verdict Summary</h2>
        <div className="bg-[#0b0f17] border border-white/10 p-6 rounded-lg text-white/70">
          AI analysis flagged 27 high-risk narratives in the past 24h.
          Binance and Ethereum show rising narrative pressure velocity.
          Probability of escalation: 63%.
        </div>
      </section>

      {/* 8. INFLUENCER TRUST RANKING */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Influencer Trust Ranking</h2>
        <div className="space-y-2">
          {influencerRanking.map((inf, i) => (
            <div key={i} className="flex justify-between bg-[#0b0f17] p-4 border border-white/10 rounded-lg">
              <span>{inf.name}</span>
              <span className="text-emerald-400 font-mono">{inf.trustScore}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TOP ENTITY LIST */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Top Entity List</h2>
        <div className="space-y-2">
          {topEntities.map((entity, i) => (
            <div key={i} className="flex justify-between bg-[#0b0f17] p-4 border border-white/10 rounded-lg">
              <span>{entity.name}</span>
              <span className="text-emerald-400 font-mono">{entity.health}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}