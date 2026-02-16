import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

export function MarketOverview() {
  const metrics = [
    { label: 'Total Market Cap', value: '$2.84T', change: '+2.4%', trend: 'up' },
    { label: 'BTC Dominance', value: '54.2%', change: '+0.8%', trend: 'up' },
    { label: 'ETH Dominance', value: '18.7%', change: '-0.3%', trend: 'down' },
    { label: 'DeFi TVL', value: '$89.4B', change: '+1.2%', trend: 'up' },
    { label: '24h Volume', value: '$124.8B', change: '-3.1%', trend: 'down' },
    { label: 'Active Addresses', value: '12.4M', change: '+5.7%', trend: 'up' },
    { label: 'Gas Price (ETH)', value: '12 gwei', change: '-18.2%', trend: 'down' },
    { label: 'Fear & Greed', value: '67', change: '+4', trend: 'up' }
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {metrics.map((metric, i) => (
        <div key={i} className="bg-[#0a0d15] border border-gray-800 rounded p-3">
          <div className="flex items-start justify-between mb-2">
            <span className="text-xs text-gray-600">{metric.label}</span>
            <span className={`text-xs font-mono ${
              metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>
              {metric.change}
            </span>
          </div>
          <div className="text-xl font-bold text-white font-mono">{metric.value}</div>
        </div>
      ))}
    </div>
  );
}
