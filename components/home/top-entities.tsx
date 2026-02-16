import { Building2, TrendingUp, TrendingDown } from 'lucide-react';

const entities = [
  { rank: 1, name: 'Ethereum', type: 'L1 Protocol', health: 79, volume: '$42.3B', tvl: '$51.2B', trend: 'up', change: '+1' },
  { rank: 2, name: 'Coinbase', type: 'Exchange', health: 71, volume: '$8.9B', tvl: 'N/A', trend: 'down', change: '-3' },
  { rank: 3, name: 'Solana', type: 'L1 Protocol', health: 64, volume: '$12.1B', tvl: '$6.8B', trend: 'down', change: '-5' },
  { rank: 4, name: 'Binance', type: 'Exchange', health: 58, volume: '$31.2B', tvl: 'N/A', trend: 'down', change: '-7' },
  { rank: 5, name: 'Tether', type: 'Stablecoin', health: 52, volume: '$89.4B', tvl: 'N/A', trend: 'down', change: '-4' },
  { rank: 6, name: 'Aave', type: 'DeFi Protocol', health: 84, volume: '$340M', tvl: '$12.4B', trend: 'up', change: '+2' },
  { rank: 7, name: 'Uniswap', type: 'DEX', health: 88, volume: '$1.8B', tvl: '$5.2B', trend: 'up', change: '+3' },
  { rank: 8, name: 'Polygon', type: 'L2 Protocol', health: 73, volume: '$890M', tvl: '$1.1B', trend: 'neutral', change: '0' }
];

export function TopEntities() {
  const getHealthColor = (health: number) => {
    if (health >= 80) return 'text-green-500';
    if (health >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'L1 Protocol':
      case 'L2 Protocol':
        return 'bg-blue-950/30 border-blue-900/30 text-blue-400';
      case 'Exchange':
        return 'bg-purple-950/30 border-purple-900/30 text-purple-400';
      case 'DeFi Protocol':
      case 'DEX':
        return 'bg-cyan-950/30 border-cyan-900/30 text-cyan-400';
      case 'Stablecoin':
        return 'bg-gray-900/30 border-gray-800/30 text-gray-400';
      default:
        return 'bg-gray-900/30 border-gray-800/30 text-gray-400';
    }
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800/50 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 tracking-wide">TOP ENTITIES BY HEALTH SCORE</h2>
          <p className="text-xs text-gray-600 mt-1">Credibility & Stability Ranking</p>
        </div>
        <Building2 className="w-4 h-4 text-green-500" />
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-3 px-3 pb-2 mb-2 border-b border-gray-800/50 text-xs text-gray-600 font-medium">
        <div className="col-span-1">#</div>
        <div className="col-span-4">Entity</div>
        <div className="col-span-2 text-center">Health</div>
        <div className="col-span-2 text-center">Volume</div>
        <div className="col-span-2 text-center">TVL</div>
        <div className="col-span-1 text-center">Δ</div>
      </div>

      {/* Table Body */}
      <div className="space-y-1">
        {entities.map((entity) => (
          <div key={entity.rank} className="grid grid-cols-12 gap-3 px-3 py-2.5 bg-[#05070d] border border-gray-800/50 rounded hover:border-gray-700/50 transition-colors items-center">
            <div className="col-span-1">
              <span className="text-xs font-mono text-gray-600">{entity.rank}</span>
            </div>
            
            <div className="col-span-4">
              <div className="text-sm text-white font-medium mb-1">{entity.name}</div>
              <span className={`text-xs px-2 py-0.5 rounded border ${getTypeBadgeColor(entity.type)}`}>
                {entity.type}
              </span>
            </div>

            <div className="col-span-2 text-center">
              <span className={`text-sm font-mono ${getHealthColor(entity.health)}`}>
                {entity.health}
              </span>
            </div>

            <div className="col-span-2 text-center">
              <span className="text-xs font-mono text-gray-400">
                {entity.volume}
              </span>
            </div>

            <div className="col-span-2 text-center">
              <span className="text-xs font-mono text-gray-400">
                {entity.tvl}
              </span>
            </div>

            <div className="col-span-1 text-center">
              <div className="flex items-center justify-center">
                {entity.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-500" />}
                {entity.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-500" />}
                {entity.trend === 'neutral' && <span className="text-xs text-gray-600">—</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
