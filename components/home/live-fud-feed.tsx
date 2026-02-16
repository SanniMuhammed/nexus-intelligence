import { AlertCircle, TrendingUp, ExternalLink } from 'lucide-react';

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
  },
  {
    time: '31m ago',
    severity: 'low',
    type: 'Protocol',
    event: 'Ethereum gas fees spike 200% - network congestion FUD',
    source: '@GasTracker',
    trust: 91,
    impact: 42
  },
  {
    time: '37m ago',
    severity: 'critical',
    type: 'Exchange',
    event: 'Unconfirmed reports: Coinbase facing banking partner issues',
    source: '@AnonymousSource',
    trust: 12,
    impact: 89
  }
];

export function LiveFudFeed() {
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
    <div className="bg-[#0a0d15] border border-gray-800/50 rounded p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 tracking-wide">LIVE FUD FEED</h2>
          <p className="text-xs text-gray-600 mt-1">Real-Time Narrative Events</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs text-red-500 font-mono">STREAMING</span>
        </div>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {fudEvents.map((event, i) => (
          <div key={i} className="bg-[#05070d] border border-gray-800/50 rounded p-4 hover:border-gray-700/50 transition-colors group">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded border ${getSeverityColor(event.severity)} font-mono`}>
                  {event.severity.toUpperCase()}
                </span>
                <span className="text-xs text-gray-600">{event.time}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-gray-700 group-hover:text-gray-500 transition-colors" />
            </div>

            <p className="text-sm text-white mb-3 leading-relaxed">{event.event}</p>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  Type: <span className="text-gray-400">{event.type}</span>
                </span>
                <span className="text-gray-600">
                  Source: <span className="text-gray-400">{event.source}</span>
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono">
                <span className={`${getTrustColor(event.trust)}`}>
                  T: {event.trust}
                </span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400">
                  I: {event.impact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0d15;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1f2937;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #374151;
        }
      `}</style>
    </div>
  );
}