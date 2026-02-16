import { AlertTriangle, TrendingUp, Target, Activity } from 'lucide-react';

export function StatCards() {
  const stats = [
    {
      label: 'Total FUD Events Today',
      value: '1,247',
      change: '+18.2%',
      trend: 'up',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      label: 'Avg Trust Score',
      value: '64.3',
      change: '-3.1%',
      trend: 'down',
      icon: Activity,
      color: 'amber'
    },
    {
      label: 'Most Targeted Entity',
      value: 'Binance',
      change: '312 mentions',
      trend: 'neutral',
      icon: Target,
      color: 'red'
    },
    {
      label: 'Risk Velocity',
      value: '+12.4%/h',
      change: 'Accelerating',
      trend: 'up',
      icon: TrendingUp,
      color: 'red'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-[#0a0d15] border border-gray-800/50 rounded p-4">
          <div className="flex items-start justify-between mb-3">
            <div className={`p-2 rounded bg-${stat.color}-950/30`}>
              <stat.icon className={`w-4 h-4 text-${stat.color}-500`} />
            </div>
            <span className={`text-xs font-mono ${
              stat.trend === 'up' ? 'text-red-500' : 
              stat.trend === 'down' ? 'text-green-500' : 
              'text-gray-500'
            }`}>
              {stat.change}
            </span>
          </div>
          <div className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
          <div className="text-xs text-gray-500 tracking-wide">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
