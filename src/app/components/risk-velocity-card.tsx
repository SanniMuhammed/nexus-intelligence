import { TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function RiskVelocityCard() {
  const [velocity, setVelocity] = useState(45.3);
  const [bars, setBars] = useState(Array.from({ length: 12 }, () => Math.random() * 100));

  useEffect(() => {
    const interval = setInterval(() => {
      setVelocity(prev => {
        const delta = (Math.random() - 0.5) * 4;
        return Math.max(0, Math.min(100, prev + delta));
      });
      setBars(prev => [...prev.slice(1), Math.random() * 100]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const trend = velocity > 45 ? 'up' : 'down';

  return (
    <div className="bg-[#0a0d15] border border-gray-800 rounded p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-amber-500" />
        <h3 className="text-sm font-semibold text-gray-400 tracking-wide">RISK VELOCITY</h3>
      </div>

      <div className="space-y-4">
        <div>
          <div 
            className="text-5xl font-bold font-mono tabular-nums"
            style={{ color: trend === 'up' ? '#ef4444' : '#10b981' }}
          >
            {velocity.toFixed(1)}
          </div>
          <div className="text-xs text-gray-600 mt-1 uppercase tracking-wider">
            Events per hour
          </div>
        </div>

        {/* Mini Chart */}
        <div className="flex items-end gap-0.5 h-16">
          {bars.map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-amber-500 transition-all duration-500 rounded-sm"
              style={{
                height: `${height}%`,
                opacity: 0.3 + (i / bars.length) * 0.7
              }}
            />
          ))}
        </div>

        <div className="space-y-2 pt-3 border-t border-gray-800">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">24h Change</span>
            <span className="text-red-500 font-mono">+12.4%</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Peak Today</span>
            <span className="text-gray-400 font-mono">89.2</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Avg 7d</span>
            <span className="text-gray-400 font-mono">38.1</span>
          </div>
        </div>
      </div>
    </div>
  );
}