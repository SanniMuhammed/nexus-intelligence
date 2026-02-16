import { Radio, ExternalLink } from 'lucide-react';

const fudEvents = [
  {
    time: '2m ago',
    severity: 'critical',
    type: 'Regulatory',
    event: 'SEC Chair hints at stricter exchange regulations in Q2 2026',
    source: '@CryptoRegWatch',
    trust: 82,
    impact: 94
  },
  {
    time: '8m ago',
    severity: 'high',
    type: 'Exchange',
    event: 'Binance withdrawal delays reported by 2,400+ users on X',
    source: '@WhaleAlerts',
    trust: 76,
    impact: 88
  },
  {
    time: '12m ago',
    severity: 'high',
    type: 'Protocol',
    event: 'Unverified claims of Solana validator exploit circulating',
    source: '@0xShadow',
    trust: 34,
    impact: 71
  },
  {
    time: '18m ago',
    severity: 'medium',
    type: 'Market',
    event: 'Large BTC transfer to exchange tagged as "Whale Dump Incoming"',
    source: '@ChainEye',
    trust: 68,
    impact: 65
  },
  {
    time: '24m ago',
    severity: 'medium',
    type: 'Influencer',
    event: 'Prominent analyst suggests "alt season cancelled" narrative',
    source: '@TechDev_52',
    trust: 71,
    impact: 59
  }
];

export function FudFeedPreview() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-950/30 border-red-900/30 text-red-500';
      case 'high': return 'bg-orange-950/30 border-orange-900/30 text-orange-500';
      case 'medium': return 'bg-amber-950/30 border-amber-900/30 text-amber-500';
      default: return 'bg-gray-900/30 border-gray-800/30 text-gray-500';
    }
  };

  const getTrustColor = (trust: number) => {
    if (trust >= 70) return 'text-green-500';
    if (trust >= 40) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-[#0a0d15] border border-gray-800 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-red-500 animate-pulse" />
          <h3 className="text-sm font-semibold text-gray-400 tracking-wide">LIVE FUD FEED</h3>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-gray-600">Events Today: <span className="text-gray-400 font-mono">1,247</span></span>
          <span className="text-gray-600 font-mono">STREAMING</span>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-3 px-3 py-2 border-b border-gray-800 mb-2">
        <div className="col-span-1 text-xs text-gray-600 uppercase tracking-wider">Time</div>
        <div className="col-span-1 text-xs text-gray-600 uppercase tracking-wider">Sev</div>
        <div className="col-span-6 text-xs text-gray-600 uppercase tracking-wider">Event</div>
        <div className="col-span-2 text-xs text-gray-600 uppercase tracking-wider">Source</div>
        <div className="col-span-2 text-xs text-gray-600 uppercase tracking-wider text-right">T / I</div>
      </div>

      {/* Feed Items */}
      <div className="space-y-1.5">
        {fudEvents.map((event, i) => (
          <div 
            key={i} 
            className="grid grid-cols-12 gap-3 px-3 py-2.5 bg-[#05070d] border border-gray-800/50 rounded hover:border-gray-700 transition-colors group"
          >
            <div className="col-span-1 text-xs text-gray-500 font-mono">
              {event.time}
            </div>
            
            <div className="col-span-1">
              <span className={`text-xs px-1.5 py-0.5 rounded border ${getSeverityColor(event.severity)} font-mono uppercase`}>
                {event.severity[0]}
              </span>
            </div>
            
            <div className="col-span-6">
              <p className="text-xs text-white leading-tight mb-0.5">{event.event}</p>
              <span className="text-xs text-gray-600">{event.type}</span>
            </div>
            
            <div className="col-span-2 text-xs text-gray-400">
              {event.source}
            </div>
            
            <div className="col-span-2 text-right">
              <div className="flex items-center justify-end gap-2 text-xs font-mono">
                <span className={getTrustColor(event.trust)}>
                  {event.trust}
                </span>
                <span className="text-gray-700">|</span>
                <span className="text-gray-400">
                  {event.impact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}