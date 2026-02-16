import { Target, TrendingUp } from 'lucide-react';

const entities = [
  { rank: 1, name: 'Binance', mentions: 312, health: 58, sentiment: -34, change: '+18%' },
  { rank: 2, name: 'Coinbase', mentions: 287, health: 71, sentiment: -12, change: '+8%' },
  { rank: 3, name: 'Solana', mentions: 194, health: 64, sentiment: -21, change: '+42%' },
  { rank: 4, name: 'Tether', mentions: 176, health: 52, sentiment: -28, change: '+7%' },
  { rank: 5, name: 'Ethereum', mentions: 143, health: 79, sentiment: -8, change: '+3%' }
];

export function MostTargetedEntities() {
  const getHealthColor = (health: number) => {
    if (health >= 70) return 'text-green-500';
    if (health >= 40) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800/50 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 tracking-wide">MOST TARGETED ENTITIES</h2>
          <p className="text-xs text-gray-600 mt-1">By Mention Volume (24h)</p>
        </div>
        <Target className="w-4 h-4 text-amber-500" />
      </div>

      <div className="space-y-2">
        {entities.map((entity) => (
          <div key={entity.rank} className="flex items-center gap-3 p-3 bg-[#05070d] border border-gray-800/50 rounded hover:border-gray-700/50 transition-colors">
            <div className="w-6 text-center">
              <span className="text-xs font-mono text-gray-600">#{entity.rank}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-white font-medium">{entity.name}</span>
                <span className="text-xs text-red-500 font-mono">{entity.change}</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-gray-600">
                  Mentions: <span className="text-gray-400 font-mono">{entity.mentions}</span>
                </span>
                <span className="text-gray-700">•</span>
                <span className="text-gray-600">
                  Sentiment: <span className="text-red-400 font-mono">{entity.sentiment}%</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className={`text-xs font-mono ${getHealthColor(entity.health)}`}>
                H: {entity.health}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
