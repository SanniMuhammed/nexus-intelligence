import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function PanicMeterLarge() {
  const [riskLevel, setRiskLevel] = useState(67);

  useEffect(() => {
    const interval = setInterval(() => {
      setRiskLevel(prev => {
        const delta = (Math.random() - 0.5) * 2;
        return Math.max(0, Math.min(100, prev + delta));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    { value: riskLevel },
    { value: 100 - riskLevel }
  ];

  const getColor = () => {
    if (riskLevel >= 70) return '#ef4444';
    if (riskLevel >= 40) return '#f59e0b';
    return '#10b981';
  };

  const getRiskLabel = () => {
    if (riskLevel >= 70) return 'HIGH RISK';
    if (riskLevel >= 40) return 'MODERATE';
    return 'STABLE';
  };

  const categories = [
    { label: 'Exchange FUD', value: 72, color: '#ef4444' },
    { label: 'Protocol Risk', value: 58, color: '#f59e0b' },
    { label: 'Regulatory Threat', value: 81, color: '#dc2626' },
    { label: 'Market Manipulation', value: 45, color: '#f59e0b' },
    { label: 'Influencer Panic', value: 69, color: '#f59e0b' }
  ];

  return (
    <div className="bg-[#0a0d15] border border-gray-800 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-semibold text-gray-400 tracking-wide">PANIC METER</h3>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-gray-600">Peak 24h: <span className="text-red-500 font-mono">89</span></span>
          <span className="text-gray-600">Avg 7d: <span className="text-gray-400 font-mono">54</span></span>
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
            <div className="text-5xl font-bold text-white font-mono">
              {Math.round(riskLevel)}
            </div>
            <div className="text-xs font-semibold tracking-wider mt-2" style={{ color: getColor() }}>
              {getRiskLabel()}
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">{cat.label}</span>
                <span className="text-white font-mono tabular-nums">{cat.value}</span>
              </div>
              <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500" 
                  style={{ width: `${cat.value}%`, backgroundColor: cat.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert */}
      <div className="mt-5 bg-red-950/20 border border-red-900/30 rounded p-3">
        <div className="flex items-start gap-2">
          <div className="w-1 h-1 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-red-400 mb-1">ELEVATED RISK DETECTED</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Regulatory FUD spike (+34%) following SEC enforcement rumors. 3 exchanges flagged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}