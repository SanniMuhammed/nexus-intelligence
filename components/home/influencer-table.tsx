import { Award } from 'lucide-react';

const influencers = [
  { rank: 1, name: 'Vitalik Buterin', handle: '@VitalikButerin', trust: 94, accuracy: 91, influence: 96 },
  { rank: 2, name: 'CZ', handle: '@cz_binance', trust: 87, accuracy: 84, influence: 93 },
  { rank: 3, name: 'CryptoRegWatch', handle: '@CryptoRegWatch', trust: 82, accuracy: 88, influence: 78 },
  { rank: 4, name: 'WhaleAlerts', handle: '@WhaleAlerts', trust: 76, accuracy: 79, influence: 85 },
  { rank: 5, name: 'TechDev', handle: '@TechDev_52', trust: 71, accuracy: 73, influence: 72 },
  { rank: 6, name: 'ChainEye', handle: '@ChainEye', trust: 68, accuracy: 71, influence: 65 },
  { rank: 7, name: 'GasTracker', handle: '@GasTracker', trust: 91, accuracy: 94, influence: 61 },
  { rank: 8, name: 'DeFi Pulse', handle: '@DeFiPulse', trust: 85, accuracy: 86, influence: 74 }
];

export function InfluencerTable() {
  const getTrustColor = (score: number) => {
    if (score >= 85) return 'text-green-500';
    if (score >= 70) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-semibold text-gray-400 tracking-wide">TOP INFLUENCER TRUST RANKING</h3>
        </div>
        <div className="text-xs text-gray-600">
          <span className="text-gray-500">Tracked: </span>
          <span className="text-gray-400 font-mono">2,847 accounts</span>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-3 px-3 py-2 border-b border-gray-800 mb-1">
        <div className="col-span-1 text-xs text-gray-600 uppercase tracking-wider">#</div>
        <div className="col-span-5 text-xs text-gray-600 uppercase tracking-wider">Name</div>
        <div className="col-span-2 text-xs text-gray-600 uppercase tracking-wider text-center">Trust</div>
        <div className="col-span-2 text-xs text-gray-600 uppercase tracking-wider text-center">Accuracy</div>
        <div className="col-span-2 text-xs text-gray-600 uppercase tracking-wider text-center">Influence</div>
      </div>

      {/* Table Body */}
      <div className="space-y-1">
        {influencers.map((inf) => (
          <div 
            key={inf.rank}
            className="grid grid-cols-12 gap-3 px-3 py-2.5 bg-[#05070d] border border-gray-800/50 rounded hover:border-gray-700 transition-colors"
          >
            <div className="col-span-1 flex items-center">
              <span className="text-xs font-mono text-gray-600">{inf.rank}</span>
            </div>
            
            <div className="col-span-5 flex flex-col justify-center">
              <div className="text-sm text-white font-medium">{inf.name}</div>
              <div className="text-xs text-gray-600">{inf.handle}</div>
            </div>

            <div className="col-span-2 flex items-center justify-center">
              <span className={`text-sm font-mono tabular-nums ${getTrustColor(inf.trust)}`}>
                {inf.trust}
              </span>
            </div>

            <div className="col-span-2 flex items-center justify-center">
              <span className="text-sm font-mono tabular-nums text-gray-400">
                {inf.accuracy}%
              </span>
            </div>

            <div className="col-span-2 flex items-center justify-center">
              <span className={`text-sm font-mono tabular-nums ${getTrustColor(inf.influence)}`}>
                {inf.influence}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}