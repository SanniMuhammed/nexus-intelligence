import { Building2, ArrowRightLeft, Code2 } from 'lucide-react';

const panels = [
  {
    icon: Building2,
    title: 'For Funds',
    description: 'Portfolio risk monitoring and narrative exposure tracking for institutional asset managers.',
    features: [
      'Real-time portfolio narrative risk assessment',
      'Counterparty credibility scoring',
      'Pre-emptive FUD detection algorithms',
      'Institutional-grade API access'
    ]
  },
  {
    icon: ArrowRightLeft,
    title: 'For Exchanges',
    description: 'Listing risk analysis and market manipulation detection for digital asset trading platforms.',
    features: [
      'Token listing narrative due diligence',
      'Market manipulation pattern recognition',
      'Community trust score aggregation',
      'Regulatory signal monitoring'
    ]
  },
  {
    icon: Code2,
    title: 'For Builders',
    description: 'Protocol health monitoring and ecosystem sentiment tracking for development teams.',
    features: [
      'Competitive narrative intelligence',
      'Developer community sentiment analysis',
      'Partnership credibility verification',
      'Technical narrative risk scoring'
    ]
  }
];

export function InstitutionalPanels() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {panels.map((panel, idx) => (
        <div 
          key={idx}
          className="bg-[#0a0d15] border border-gray-800 rounded p-6 hover:border-gray-700 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <panel.icon className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-semibold text-white">{panel.title}</h3>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            {panel.description}
          </p>

          <ul className="space-y-2.5">
            {panel.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <div className="w-1 h-1 rounded-full bg-gray-700 mt-1.5 flex-shrink-0" />
                <span className="text-xs text-gray-400 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
