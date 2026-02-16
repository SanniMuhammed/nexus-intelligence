import { TrendingDown, ExternalLink } from 'lucide-react';

const spreaders = [
  { rank: 1, handle: '@CryptoFearMonger', trust: 18, fudCount: 47, impact: 892, change: '+12' },
  { rank: 2, handle: '@AnonymousSource', trust: 12, fudCount: 38, impact: 743, change: '+8' },
  { rank: 3, handle: '@MarketPanicBot', trust: 9, fudCount: 34, impact: 621, change: '+21' },
  { rank: 4, handle: '@0xShadow', trust: 34, fudCount: 29, impact: 581, change: '+5' },
  { rank: 5, handle: '@DoomPredictor', trust: 21, fudCount: 27, impact: 512, change: '+15' }
];

export function TopFudSpreaders() {
  const getTrustColor = (trust: number) => {
    if (trust >= 70) return 'text-green-500';
    if (trust >= 40) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800/50 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 tracking-wide">TOP FUD SPREADERS TODAY</h2>
          <p className="text-xs text-gray-600 mt-1">Ranked by Impact Score</p>
        </div>
        <TrendingDown className="w-4 h-4 text-red-500" />
      </div>

      <div className="space-y-2">
        {spreaders.map((spreader) => (
          <div key={spreader.rank} className="flex items-center gap-3 p-3 bg-[#05070d] border border-gray-800/50 rounded hover:border-gray-700/50 transition-colors group">
            <div className="w-6 text-center">
              <span className="text-xs font-mono text-gray-600">#{spreader.rank}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-white truncate">{spreader.handle}</span>
                <ExternalLink className="w-3 h-3 text-gray-700 group-hover:text-gray-500 transition-colors flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-gray-600">
                  Events: <span className="text-gray-400 font-mono">{spreader.fudCount}</span>
                </span>
                <span className="text-gray-700">•</span>
                <span className="text-gray-600">
                  Impact: <span className="text-gray-400 font-mono">{spreader.impact}</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className={`text-xs font-mono ${getTrustColor(spreader.trust)}`}>
                T: {spreader.trust}
              </span>
              <span className="text-xs text-red-500 font-mono">
                {spreader.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
