import { Lock, ArrowRight } from 'lucide-react';
import { CredibilityTicker } from './components/credibility-ticker';
import { PanicMeterLarge } from './components/panic-meter-large';
import { FudFeedPreview } from './components/fud-feed-preview';
import { RiskVelocityCard } from './components/risk-velocity-card';
import { InfluencerTable } from './components/influencer-table';
import { InstitutionalRankings } from './components/institutional-rankings';
import { MarketOverview } from './components/market-overview';
import { NarrativeHeatmap } from './components/narrative-heatmap';
import { EntityHealthGrid } from './components/entity-health-grid';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070d] text-gray-300">
      {/* Section 1: Identity & Thesis */}
      <section className="min-h-screen flex items-center justify-center border-b border-gray-800/30 relative">
        <div className="max-w-[1600px] w-full px-6 py-16">
          <div className="mb-6">
            <h1 className="text-6xl font-semibold text-white tracking-tight mb-4">
              Nexus Intelligence
            </h1>
            <h2 className="text-xl text-gray-400 mb-4 tracking-wide">
              Quantifying Narrative Risk in Digital Asset Markets.
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl leading-relaxed">
              Advanced credibility scoring infrastructure for institutional participants. Real-time FUD detection,
              entity health monitoring, and influencer trust analysis across decentralized markets.
            </p>
          </div>

          <div className="mb-6">
            <CredibilityTicker />
          </div>

          <div className="mb-8">
            <button className="group flex items-center gap-3 bg-[#0a0d15] hover:bg-[#0f1419] border border-gray-800 hover:border-gray-700 px-5 py-2.5 rounded transition-all">
              <Lock className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-white text-sm font-medium tracking-wide">ACCESS TERMINAL</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          {/* Market Overview Grid */}
          <MarketOverview />
        </div>

        {/* Grid Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </section>

      {/* Section 2: FUD Intelligence System */}
      <section className="min-h-screen flex items-center justify-center border-b border-gray-800/30 relative">
        <div className="max-w-[1600px] w-full px-6 py-16">
          <div className="mb-5">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
              FUD Intelligence System
            </h2>
            <p className="text-xs text-gray-600">
              Real-time fear, uncertainty, and doubt monitoring infrastructure
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2">
              <PanicMeterLarge />
            </div>
            <div className="space-y-4">
              <RiskVelocityCard />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <FudFeedPreview />
            </div>
            <div>
              <NarrativeHeatmap />
            </div>
          </div>
        </div>

        {/* Grid Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </section>

      {/* Section 3: Influence & Credibility Layer */}
      <section className="min-h-screen flex items-center justify-center border-b border-gray-800/30 relative">
        <div className="max-w-[1600px] w-full px-6 py-16">
          <div className="mb-5">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
              Influence & Credibility Layer
            </h2>
            <p className="text-xs text-gray-600">
              Quantitative analysis of market participant trust metrics
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <InfluencerTable />
            </div>
            <div>
              <EntityHealthGrid />
            </div>
          </div>
        </div>

        {/* Grid Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </section>

      {/* Section 4: Institutional Infrastructure */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-[1600px] w-full px-6 py-16">
          <div className="mb-5">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
              Institutional Infrastructure
            </h2>
            <p className="text-xs text-gray-600">
              Exchange rankings, proof of reserves, and on-chain health metrics
            </p>
          </div>

          <InstitutionalRankings />
        </div>

        {/* Grid Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 px-6 py-4">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between text-xs">
          <div className="text-gray-600">
            © 2026 Nexus Intelligence · Institutional-grade narrative risk infrastructure
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">API Status:</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-gray-500">OPERATIONAL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
