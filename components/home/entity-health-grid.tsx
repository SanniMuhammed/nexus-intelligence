import { Shield, AlertCircle } from 'lucide-react';

const entities = [
  { name: 'Bitcoin', health: 94, fudCount: 143, change: '+2' },
  { name: 'Ethereum', health: 89, fudCount: 187, change: '-3' },
  { name: 'Solana', health: 76, fudCount: 294, change: '-8' },
  { name: 'Binance', health: 78, fudCount: 312, change: '-12' },
  { name: 'Tether', health: 72, fudCount: 276, change: '-5' },
  { name: 'Coinbase', health: 92, fudCount: 98, change: '+1' }
];

export function EntityHealthGrid() {
  const getHealthColor = (health: number) => {
    if (health >= 85) return 'text-green-500';
    if (health >= 70) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800 rounded p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-4 h-4 text-green-500" />
        <h3 className="text-sm font-semibold text-gray-400 tracking-wide">ENTITY HEALTH</h3>
      </div>

      <div className="space-y-3">
        {entities.map((entity, i) => (
          <div key={i} className="bg-[#05070d] border border-gray-800/50 rounded p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white font-medium">{entity.name}</span>
              <span className={`text-xs font-mono ${
                entity.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {entity.change}
              </span>
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600">Health Score</span>
              <span className={`text-sm font-mono ${getHealthColor(entity.health)}`}>
                {entity.health}
              </span>
            </div>

            <div className="h-1 bg-gray-900 rounded-full overflow-hidden mb-2">
              <div 
                className={`h-full ${
                  entity.health >= 85 ? 'bg-green-500' : 
                  entity.health >= 70 ? 'bg-amber-500' : 'bg-red-500'
                }`}
                style={{ width: `${entity.health}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">FUD Events</span>
              <span className="text-gray-400 font-mono">{entity.fudCount}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-3 h-3 text-amber-500" />
          <span className="text-xs text-gray-600">6 entities monitored</span>
        </div>
      </div>
    </div>
  );
}
