import { Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CredibilityTicker() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(t => t + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      label: 'Entity Health',
      value: 78.4 + Math.sin(tick * 0.5) * 0.3,
      change: 0.2,
      icon: Activity
    },
    { 
      label: 'Trust Score',
      value: 84.1 + Math.cos(tick * 0.6) * 0.4,
      change: -0.3,
      icon: TrendingUp
    },
    { 
      label: 'Panic Index',
      value: 67.2 + Math.sin(tick * 0.4) * 0.5,
      change: 1.2,
      icon: AlertTriangle
    }
  ];

  return (
    <div className="inline-flex items-center gap-8 bg-[#0a0d15] border border-gray-800 px-6 py-3 rounded">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-3">
          <stat.icon className="w-3.5 h-3.5 text-gray-600" />
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-gray-600 uppercase tracking-wider font-medium">
              {stat.label}
            </span>
            <span className="text-sm text-white font-mono tabular-nums">
              {stat.value.toFixed(1)}
            </span>
            <span className={`text-xs font-mono tabular-nums ${
              stat.change >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {stat.change >= 0 ? '+' : ''}{stat.change.toFixed(1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
