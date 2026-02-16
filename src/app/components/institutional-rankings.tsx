import { Building2, TrendingUp, TrendingDown, Shield, Activity, Database } from 'lucide-react';

const institutions = [
  {
    rank: 1,
    name: 'Coinbase',
    type: 'CEX',
    health: 92,
    proofOfReserve: 98,
    devActivity: 87,
    volume24h: '$8.94B',
    reserves: '$89.2B',
    auditScore: 96,
    uptime: 99.97,
    apiHealth: 98,
    securityScore: 94,
    trend: 'up'
  },
  {
    rank: 2,
    name: 'Kraken',
    type: 'CEX',
    health: 89,
    proofOfReserve: 96,
    devActivity: 82,
    volume24h: '$2.31B',
    reserves: '$34.8B',
    auditScore: 94,
    uptime: 99.94,
    apiHealth: 96,
    securityScore: 93,
    trend: 'up'
  },
  {
    rank: 3,
    name: 'Binance',
    type: 'CEX',
    health: 78,
    proofOfReserve: 82,
    devActivity: 91,
    volume24h: '$31.2B',
    reserves: '$112.4B',
    auditScore: 79,
    uptime: 99.89,
    apiHealth: 94,
    securityScore: 81,
    trend: 'down'
  },
  {
    rank: 4,
    name: 'OKX',
    type: 'CEX',
    health: 84,
    proofOfReserve: 88,
    devActivity: 85,
    volume24h: '$5.67B',
    reserves: '$42.1B',
    auditScore: 86,
    uptime: 99.91,
    apiHealth: 92,
    securityScore: 87,
    trend: 'up'
  },
  {
    rank: 5,
    name: 'Bybit',
    type: 'CEX',
    health: 81,
    proofOfReserve: 85,
    devActivity: 79,
    volume24h: '$4.21B',
    reserves: '$28.7B',
    auditScore: 83,
    uptime: 99.88,
    apiHealth: 89,
    securityScore: 84,
    trend: 'neutral'
  },
  {
    rank: 6,
    name: 'Uniswap',
    type: 'DEX',
    health: 94,
    proofOfReserve: 100,
    devActivity: 96,
    volume24h: '$1.89B',
    reserves: '$5.2B',
    auditScore: 98,
    uptime: 100,
    apiHealth: 97,
    securityScore: 96,
    trend: 'up'
  },
  {
    rank: 7,
    name: 'Gate.io',
    type: 'CEX',
    health: 76,
    proofOfReserve: 79,
    devActivity: 74,
    volume24h: '$1.94B',
    reserves: '$18.3B',
    auditScore: 77,
    uptime: 99.82,
    apiHealth: 85,
    securityScore: 78,
    trend: 'down'
  },
  {
    rank: 8,
    name: 'Bitfinex',
    type: 'CEX',
    health: 73,
    proofOfReserve: 76,
    devActivity: 68,
    volume24h: '$890M',
    reserves: '$14.6B',
    auditScore: 74,
    uptime: 99.79,
    apiHealth: 81,
    securityScore: 75,
    trend: 'down'
  }
];

export function InstitutionalRankings() {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 75) return 'text-amber-500';
    if (score >= 60) return 'text-orange-500';
    return 'text-red-500';
  };

  const getTypeBadge = (type: string) => {
    return type === 'DEX' 
      ? 'bg-cyan-950/30 border-cyan-900/30 text-cyan-400'
      : 'bg-purple-950/30 border-purple-900/30 text-purple-400';
  };

  return (
    <div className="space-y-4">
      {/* Main Rankings Table */}
      <div className="bg-[#0a0d15] border border-gray-800 rounded p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-semibold text-gray-400 tracking-wide">INSTITUTIONAL RANKINGS</h3>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-gray-600">Last Updated:</span>
            <span className="text-gray-500 font-mono">23s ago</span>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-24 gap-2 px-3 py-2 border-b border-gray-800 mb-1 text-xs">
          <div className="col-span-1 text-gray-600 uppercase tracking-wider">#</div>
          <div className="col-span-4 text-gray-600 uppercase tracking-wider">Institution</div>
          <div className="col-span-2 text-center text-gray-600 uppercase tracking-wider">Health</div>
          <div className="col-span-2 text-center text-gray-600 uppercase tracking-wider">PoR</div>
          <div className="col-span-2 text-center text-gray-600 uppercase tracking-wider">Dev</div>
          <div className="col-span-3 text-right text-gray-600 uppercase tracking-wider">24h Volume</div>
          <div className="col-span-3 text-right text-gray-600 uppercase tracking-wider">Reserves</div>
          <div className="col-span-2 text-center text-gray-600 uppercase tracking-wider">Audit</div>
          <div className="col-span-2 text-center text-gray-600 uppercase tracking-wider">Uptime</div>
          <div className="col-span-2 text-center text-gray-600 uppercase tracking-wider">API</div>
          <div className="col-span-1 text-center text-gray-600 uppercase tracking-wider">Δ</div>
        </div>

        {/* Table Body */}
        <div className="space-y-1">
          {institutions.map((inst) => (
            <div 
              key={inst.rank}
              className="grid grid-cols-24 gap-2 px-3 py-2.5 bg-[#05070d] border border-gray-800/50 rounded hover:border-gray-700 transition-colors items-center"
            >
              <div className="col-span-1">
                <span className="text-xs font-mono text-gray-600">{inst.rank}</span>
              </div>

              <div className="col-span-4">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-white font-medium">{inst.name}</div>
                  <span className={`text-xs px-1.5 py-0.5 rounded border ${getTypeBadge(inst.type)} font-mono`}>
                    {inst.type}
                  </span>
                </div>
              </div>

              <div className="col-span-2 text-center">
                <span className={`text-sm font-mono tabular-nums ${getScoreColor(inst.health)}`}>
                  {inst.health}
                </span>
              </div>

              <div className="col-span-2 text-center">
                <span className={`text-sm font-mono tabular-nums ${getScoreColor(inst.proofOfReserve)}`}>
                  {inst.proofOfReserve}
                </span>
              </div>

              <div className="col-span-2 text-center">
                <span className={`text-sm font-mono tabular-nums ${getScoreColor(inst.devActivity)}`}>
                  {inst.devActivity}
                </span>
              </div>

              <div className="col-span-3 text-right">
                <span className="text-xs font-mono text-gray-400">
                  {inst.volume24h}
                </span>
              </div>

              <div className="col-span-3 text-right">
                <span className="text-xs font-mono text-gray-400">
                  {inst.reserves}
                </span>
              </div>

              <div className="col-span-2 text-center">
                <span className={`text-xs font-mono tabular-nums ${getScoreColor(inst.auditScore)}`}>
                  {inst.auditScore}
                </span>
              </div>

              <div className="col-span-2 text-center">
                <span className="text-xs font-mono tabular-nums text-gray-400">
                  {inst.uptime}%
                </span>
              </div>

              <div className="col-span-2 text-center">
                <span className={`text-xs font-mono tabular-nums ${getScoreColor(inst.apiHealth)}`}>
                  {inst.apiHealth}
                </span>
              </div>

              <div className="col-span-1 text-center">
                {inst.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-500 mx-auto" />}
                {inst.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-500 mx-auto" />}
                {inst.trend === 'neutral' && <div className="w-3 h-0.5 bg-gray-600 mx-auto" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Metrics Grid */}
      <div className="grid grid-cols-4 gap-4">
        <MetricCard 
          icon={Shield}
          title="Avg Proof of Reserve"
          value="88.2"
          change="+2.1"
          trend="up"
          subtitle="Across Top 8"
        />
        <MetricCard 
          icon={Activity}
          title="Dev Activity Index"
          value="82.7"
          change="-0.8"
          trend="down"
          subtitle="7-day Average"
        />
        <MetricCard 
          icon={Database}
          title="Total Reserves"
          value="$345.3B"
          change="+4.2%"
          trend="up"
          subtitle="Monitored Assets"
        />
        <MetricCard 
          icon={Building2}
          title="Exchange Health"
          value="83.1"
          change="-1.4"
          trend="down"
          subtitle="Composite Score"
        />
      </div>

      {/* On-Chain Metrics Panel */}
      <div className="bg-[#0a0d15] border border-gray-800 rounded p-5">
        <h3 className="text-sm font-semibold text-gray-400 tracking-wide mb-4">ON-CHAIN METRICS SUMMARY</h3>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Net Inflow (24h)</span>
              <span className="text-sm font-mono text-green-500">+$1.24B</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Withdrawal Success Rate</span>
              <span className="text-sm font-mono text-gray-400">99.87%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Avg Withdrawal Time</span>
              <span className="text-sm font-mono text-gray-400">3.2m</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Hot Wallet Ratio</span>
              <span className="text-sm font-mono text-amber-500">12.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Cold Wallet Security</span>
              <span className="text-sm font-mono text-green-500">94.2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Multi-sig Coverage</span>
              <span className="text-sm font-mono text-gray-400">87.6%</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Smart Contract Risk</span>
              <span className="text-sm font-mono text-green-500">Low</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Oracle Reliability</span>
              <span className="text-sm font-mono text-gray-400">98.1%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Bridge Health Score</span>
              <span className="text-sm font-mono text-amber-500">76.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  subtitle: string;
}

function MetricCard({ icon: Icon, title, value, change, trend, subtitle }: MetricCardProps) {
  return (
    <div className="bg-[#0a0d15] border border-gray-800 rounded p-4">
      <div className="flex items-start justify-between mb-3">
        <Icon className="w-3.5 h-3.5 text-gray-600" />
        <span className={`text-xs font-mono ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
      <div className="text-2xl font-bold text-white font-mono mb-1">{value}</div>
      <div className="text-xs text-gray-600 mb-1">{title}</div>
      <div className="text-xs text-gray-700">{subtitle}</div>
    </div>
  );
}
