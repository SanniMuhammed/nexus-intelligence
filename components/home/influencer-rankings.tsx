import { Users, TrendingUp, TrendingDown } from 'lucide-react';

const influencers = [
  { rank: 1, name: 'VitalikButerin', handle: '@VitalikButerin', trust: 94, followers: '5.2M', accuracy: 91, trend: 'up', change: '+2' },
  { rank: 2, name: 'CZ', handle: '@cz_binance', trust: 87, followers: '8.9M', accuracy: 84, trend: 'down', change: '-5' },
  { rank: 3, name: 'CryptoRegWatch', handle: '@CryptoRegWatch', trust: 82, followers: '420K', accuracy: 88, trend: 'up', change: '+3' },
  { rank: 4, name: 'WhaleAlerts', handle: '@WhaleAlerts', trust: 76, followers: '2.1M', accuracy: 79, trend: 'up', change: '+1' },
  { rank: 5, name: 'TechDev', handle: '@TechDev_52', trust: 71, followers: '890K', accuracy: 73, trend: 'down', change: '-2' },
  { rank: 6, name: 'ChainEye', handle: '@ChainEye', trust: 68, followers: '340K', accuracy: 71, trend: 'up', change: '+4' },
  { rank: 7, name: 'GasTracker', handle: '@GasTracker', trust: 91, followers: '125K', accuracy: 94, trend: 'up', change: '+1' },
  { rank: 8, name: 'DeFiPulse', handle: '@DeFiPulse', trust: 85, followers: '560K', accuracy: 86, trend: 'neutral', change: '0' }
];

export function InfluencerRankings() {
  const getTrustColor = (trust: number) => {
    if (trust >= 80) return 'text-green-500';
    if (trust >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800/50 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 tracking-wide">INFLUENCER TRUST RANKINGS</h2>
          <p className="text-xs text-gray-600 mt-1">Top Verified Accounts by Credibility Score</p>
        </div>
        <Users className="w-4 h-4 text-blue-500" />
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-3 px-3 pb-2 mb-2 border-b border-gray-800/50 text-xs text-gray-600 font-medium">
        <div className="col-span-1">#</div>
        <div className="col-span-5">Account</div>
        <div className="col-span-2 text-center">Trust</div>
        <div className="col-span-2 text-center">Accuracy</div>
        <div className="col-span-2 text-center">Trend</div>
      </div>

      {/* Table Body */}
      <div className="space-y-1">
        {influencers.map((inf) => (
          <div key={inf.rank} className="grid grid-cols-12 gap-3 px-3 py-2.5 bg-[#05070d] border border-gray-800/50 rounded hover:border-gray-700/50 transition-colors items-center">
            <div className="col-span-1">
              <span className="text-xs font-mono text-gray-600">{inf.rank}</span>
            </div>
            
            <div className="col-span-5">
              <div className="text-sm text-white font-medium">{inf.name}</div>
              <div className="text-xs text-gray-600">{inf.handle} · {inf.followers}</div>
            </div>

            <div className="col-span-2 text-center">
              <span className={`text-sm font-mono ${getTrustColor(inf.trust)}`}>
                {inf.trust}
              </span>
            </div>

            <div className="col-span-2 text-center">
              <span className="text-sm font-mono text-gray-400">
                {inf.accuracy}%
              </span>
            </div>

            <div className="col-span-2 text-center flex items-center justify-center gap-1">
              {inf.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-500" />}
              {inf.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-500" />}
              <span className={`text-xs font-mono ${
                inf.trend === 'up' ? 'text-green-500' : 
                inf.trend === 'down' ? 'text-red-500' : 
                'text-gray-600'
              }`}>
                {inf.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
