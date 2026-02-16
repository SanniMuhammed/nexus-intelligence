import { Flame } from 'lucide-react';

const narratives = [
  { topic: 'SEC Enforcement', intensity: 94, mentions: 2847, sentiment: -68 },
  { topic: 'Exchange Solvency', intensity: 87, mentions: 1923, sentiment: -54 },
  { topic: 'Network Congestion', intensity: 76, mentions: 1456, sentiment: -42 },
  { topic: 'Whale Activity', intensity: 71, mentions: 1289, sentiment: -31 },
  { topic: 'Regulatory Clarity', intensity: 68, mentions: 1087, sentiment: 12 },
  { topic: 'ETF Inflows', intensity: 64, mentions: 987, sentiment: 48 },
  { topic: 'DeFi Security', intensity: 59, mentions: 834, sentiment: -28 },
  { topic: 'L2 Adoption', intensity: 52, mentions: 723, sentiment: 34 }
];

export function NarrativeHeatmap() {
  const getIntensityColor = (intensity: number) => {
    if (intensity >= 85) return 'bg-red-500';
    if (intensity >= 70) return 'bg-orange-500';
    if (intensity >= 55) return 'bg-amber-500';
    return 'bg-gray-700';
  };

  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 20) return 'text-green-500';
    if (sentiment >= -20) return 'text-gray-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800 rounded p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-4 h-4 text-orange-500" />
        <h3 className="text-sm font-semibold text-gray-400 tracking-wide">NARRATIVE HEATMAP</h3>
      </div>

      <div className="space-y-2.5">
        {narratives.map((narrative, i) => (
          <div key={i} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">{narrative.topic}</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-mono">{narrative.mentions}</span>
                <span className={`font-mono ${getSentimentColor(narrative.sentiment)}`}>
                  {narrative.sentiment > 0 ? '+' : ''}{narrative.sentiment}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-gray-900 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getIntensityColor(narrative.intensity)} transition-all`}
                  style={{ width: `${narrative.intensity}%` }}
                />
              </div>
              <span className="text-xs font-mono text-gray-600 w-8 text-right">
                {narrative.intensity}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Trending Up</span>
          <span className="text-red-500 font-mono">+34.2%</span>
        </div>
      </div>
    </div>
  );
}
