import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const RISK_LEVEL = 67; // Current panic level 0-100

export function PanicMeter() {
  const data = [
    { value: RISK_LEVEL },
    { value: 100 - RISK_LEVEL }
  ];

  const getColor = () => {
    if (RISK_LEVEL >= 70) return '#ef4444'; // red
    if (RISK_LEVEL >= 40) return '#f59e0b'; // amber
    return '#10b981'; // green
  };

  const getRiskLabel = () => {
    if (RISK_LEVEL >= 70) return 'HIGH RISK';
    if (RISK_LEVEL >= 40) return 'MODERATE';
    return 'STABLE';
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800/50 rounded p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 tracking-wide">PANIC METER</h2>
          <p className="text-xs text-gray-600 mt-1">Market-Wide FUD Risk Assessment</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <TrendingUp className="w-3.5 h-3.5 text-red-500" />
          <span className="text-red-500">+12.4% (24h)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Gauge */}
        <div className="relative">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
              >
                <Cell fill={getColor()} />
                <Cell fill="#1a1d2e" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-8">
            <div className="text-5xl font-bold text-white">{RISK_LEVEL}</div>
            <div className="text-xs font-semibold tracking-wider mt-1" style={{ color: getColor() }}>
              {getRiskLabel()}
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Exchange FUD</span>
              <span className="text-white font-mono">72</span>
            </div>
            <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-red-500" style={{ width: '72%' }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Protocol Risk</span>
              <span className="text-white font-mono">58</span>
            </div>
            <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: '58%' }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Regulatory Threat</span>
              <span className="text-white font-mono">81</span>
            </div>
            <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-red-600" style={{ width: '81%' }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Market Manipulation</span>
              <span className="text-white font-mono">45</span>
            </div>
            <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: '45%' }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Influencer Panic</span>
              <span className="text-white font-mono">69</span>
            </div>
            <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: '69%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="mt-6 bg-red-950/30 border border-red-900/30 rounded p-3">
        <div className="flex items-start gap-3">
          <div className="w-1 h-1 rounded-full bg-red-500 mt-1.5"></div>
          <div>
            <p className="text-xs text-red-400 font-medium">ELEVATED RISK DETECTED</p>
            <p className="text-xs text-gray-500 mt-1">
              Regulatory FUD spike (+34%) following SEC enforcement rumors. 3 exchanges flagged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
