"use client"

import { Lock, ArrowRight } from "lucide-react"

import { CredibilityTicker } from "@/components/home/credibility-ticker"
import { PanicMeterLarge } from "@/components/home/panic-meter-large"
import { FudFeedPreview } from "@/components/home/fud-feed-preview"
import { RiskVelocityCard } from "@/components/home/risk-velocity-card"
import { InfluencerTable } from "@/components/home/influencer-table"
import { InstitutionalRankings } from "@/components/home/institutional-rankings"
import { MarketOverview } from "@/components/home/market-overview"
import { NarrativeHeatmap } from "@/components/home/narrative-heatmap"
import { EntityHealthGrid } from "@/components/home/entity-health-grid"

export default function Home() {
  return (
    <div className="bg-[#05070d] text-gray-300">

      {/* SECTION 1 */}
      <section className="py-16 border-b border-gray-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4">
              Nexus Intelligence
            </h1>

            <h2 className="text-base md:text-xl text-gray-400 mb-4">
              Quantifying Narrative Risk in Digital Asset Markets.
            </h2>

            <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
              Advanced credibility scoring infrastructure for institutional participants.
              Real-time FUD detection, entity health monitoring, and influencer trust
              analysis across decentralized markets.
            </p>
          </div>

          <div className="mb-6">
            <CredibilityTicker />
          </div>

          <div className="mb-10">
            <button className="group flex items-center gap-3 bg-[#0a0d15] hover:bg-[#0f1419] border border-gray-800 hover:border-gray-700 px-5 py-2.5 rounded transition-all">
              <Lock className="w-4 h-4 text-amber-500" />
              <span className="text-white text-sm font-medium tracking-wide">
                ACCESS TERMINAL
              </span>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          <MarketOverview />
        </div>

        <GridTexture />
      </section>


      {/* SECTION 2 */}
      <section className="py-16 border-b border-gray-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              FUD Intelligence System
            </h2>
            <p className="text-xs text-gray-600">
              Real-time fear, uncertainty, and doubt monitoring infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <PanicMeterLarge />
            </div>
            <RiskVelocityCard />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <FudFeedPreview />
            </div>
            <NarrativeHeatmap />
          </div>
        </div>

        <GridTexture />
      </section>


      {/* SECTION 3 */}
      <section className="py-16 border-b border-gray-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Influence & Credibility Layer
            </h2>
            <p className="text-xs text-gray-600">
              Quantitative analysis of market participant trust metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <InfluencerTable />
            </div>
            <EntityHealthGrid />
          </div>
        </div>

        <GridTexture />
      </section>


      {/* SECTION 4 */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Institutional Infrastructure
            </h2>
            <p className="text-xs text-gray-600">
              Exchange rankings, proof of reserves, and on-chain health metrics
            </p>
          </div>

          <InstitutionalRankings />
        </div>

        <GridTexture />
      </section>


      {/* FOOTER */}
      <footer className="border-t border-gray-800/30 px-4 md:px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="text-gray-600">
            © 2026 Nexus Intelligence · Institutional-grade narrative risk infrastructure
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600">API Status:</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-500">OPERATIONAL</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}


function GridTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
      }}
    />
  )
}