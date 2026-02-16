// ================================================================
//  NEXUS Intelligence — Central Data Store
// ================================================================

export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'contained'
export type FudStatus = 'active' | 'neutralized' | 'monitoring' | 'escalating'

export interface FudEvent {
  id: string
  source: string
  sourceType: 'twitter' | 'media' | 'telegram' | 'reddit' | 'discord' | 'analyst'
  trustScore: number
  headline: string
  verdict: string
  verdictType: 'fabricated' | 'unverified' | 'confirmed' | 'neutralized'
  severity: Severity
  impactScore: number
  affectedEntity: string
  timestamp: string
  botAmplification?: number
  similarPosts?: number
  status: FudStatus
  tags: string[]
  details: string
}

export interface Influencer {
  id: string
  name: string
  handle: string
  followers: string
  trustScore: number
  tier: 'elite' | 'trusted' | 'neutral' | 'risky' | 'malicious'
  verified: boolean
  platform: 'twitter' | 'youtube' | 'substack' | 'podcast'
  fudCount: number
  accurateCallsCount: number
  bio: string
  tags: string[]
  weeklyChange: number
  totalPosts: number
}

export interface Entity {
  id: string
  name: string
  type: 'exchange' | 'stablecoin' | 'protocol' | 'defi' | 'layer1' | 'layer2' | 'wallet'
  healthScore: number
  fudLevel: 'critical' | 'high' | 'medium' | 'low' | 'minimal'
  activeAlerts: number
  emoji: string
  color: string
  details: Record<string, string>
  trend: 'improving' | 'declining' | 'stable'
  lastUpdated: string
  description: string
  riskTags: string[]
}

// ================================================================
//  FUD EVENTS
// ================================================================
export const fudEvents: FudEvent[] = [
  {
    id: 'fud-001',
    source: '@CryptoWhaleSpy',
    sourceType: 'twitter',
    trustScore: 12,
    headline: 'BREAKING: Binance is insolvent. Internal sources confirm $4.2B hole in proof-of-reserves. Mass withdrawal event imminent. Secure your funds immediately.',
    verdict: 'FABRICATED FUD — No evidence found. Source has history of coordinated pump-and-dump schemes. 847 bot accounts amplifying.',
    verdictType: 'fabricated',
    severity: 'critical',
    impactScore: 9.1,
    affectedEntity: 'Binance',
    timestamp: '2 min ago',
    botAmplification: 847,
    similarPosts: 4,
    status: 'active',
    tags: ['insolvency', 'exchange', 'binance', 'coordinated'],
    details: 'Pattern matches previous FUD campaigns from the same network in March and June 2024. Binance proof-of-reserves last updated 18 hours ago showing full backing.',
  },
  {
    id: 'fud-002',
    source: 'Decrypt Media',
    sourceType: 'media',
    trustScore: 78,
    headline: 'SEC reportedly preparing new enforcement actions against three major DeFi protocols. Sources indicate subpoenas issued to Uniswap Labs and Compound developers.',
    verdict: 'UNVERIFIED — Moderate risk. Decrypt is a reliable source but story cites anonymous sources. Awaiting official SEC filing confirmation.',
    verdictType: 'unverified',
    severity: 'medium',
    impactScore: 5.4,
    affectedEntity: 'DeFi Sector',
    timestamp: '18 min ago',
    botAmplification: 0,
    similarPosts: 12,
    status: 'monitoring',
    tags: ['sec', 'defi', 'regulation', 'uniswap'],
    details: 'Cross-referencing with SEC EDGAR shows no new enforcement filings in past 48h. Story may be accurate but timing is speculative.',
  },
  {
    id: 'fud-003',
    source: '@QuantumChainAnalyst',
    sourceType: 'analyst',
    trustScore: 91,
    headline: 'CORRECTION: Earlier Tether depegging FUD is confirmed false. USDT reserves independently attested by Moore Cayman at 102.3% backing ratio.',
    verdict: 'VERIFIED — FUD successfully neutralized. Three independent sources confirm full backing. Market should stabilize within 4-6 hours.',
    verdictType: 'neutralized',
    severity: 'contained',
    impactScore: 1.8,
    affectedEntity: 'Tether',
    timestamp: '41 min ago',
    status: 'neutralized',
    tags: ['tether', 'stablecoin', 'reserves', 'neutralized'],
    details: 'Blockchain analytics confirm no unusual USDT minting or burning in past 72h. Depeg narrative originated from a single wallet with known short position.',
  },
  {
    id: 'fud-004',
    source: '@FudMasterXXL',
    sourceType: 'twitter',
    trustScore: 8,
    headline: 'Ethereum devs abandoning ship! Lead researcher just quit. ETH 2.0 is a scam. The merge failed silently and nobody is talking about this.',
    verdict: 'FABRICATED — Staff change was a routine sabbatical announced 6 weeks ago. ETH network health at 99.98% uptime. Classic FUD pattern.',
    verdictType: 'fabricated',
    severity: 'low',
    impactScore: 2.3,
    affectedEntity: 'Ethereum',
    timestamp: '1h ago',
    botAmplification: 234,
    similarPosts: 8,
    status: 'monitoring',
    tags: ['ethereum', 'devs', 'abandonment', 'fabricated'],
    details: 'Ethereum GitHub activity remains at all-time highs with 847 commits in past 30 days. The referenced researcher posted a public tweet confirming sabbatical.',
  },
  {
    id: 'fud-005',
    source: 'CoinTelegraph',
    sourceType: 'media',
    trustScore: 72,
    headline: 'Solana network experiences intermittent degradation during peak load. Third significant incident in Q3 2024.',
    verdict: 'CONFIRMED — Network did experience 11-minute degradation window. Validators confirm root cause as memory pressure. Fix deployed at 14:23 UTC.',
    verdictType: 'confirmed',
    severity: 'high',
    impactScore: 6.7,
    affectedEntity: 'Solana',
    timestamp: '2h ago',
    status: 'monitoring',
    tags: ['solana', 'outage', 'network', 'validators'],
    details: 'Root cause: gossip subsystem under load from large transaction volume spike. Solana Labs hotfix reduces memory pressure by 40%. No funds at risk.',
  },
  {
    id: 'fud-006',
    source: 'TruthCryptoNews',
    sourceType: 'media',
    trustScore: 31,
    headline: 'EXCLUSIVE: Coinbase secretly sharing user KYC data with unnamed government agency. Whistleblower claims 2M accounts compromised.',
    verdict: 'UNVERIFIED — High risk of misinformation. TruthCryptoNews has 3 prior false stories in our database. No corroborating sources found.',
    verdictType: 'unverified',
    severity: 'high',
    impactScore: 7.2,
    affectedEntity: 'Coinbase',
    timestamp: '3h ago',
    botAmplification: 412,
    similarPosts: 19,
    status: 'escalating',
    tags: ['coinbase', 'kyc', 'privacy', 'government'],
    details: 'Coinbase legal team issued public statement denying claims. No evidence of unusual government requests in Coinbase transparency reports.',
  },
]

// ================================================================
//  INFLUENCERS
// ================================================================
export const influencers: Influencer[] = [
  {
    id: 'inf-001',
    name: 'Vitalik Buterin',
    handle: '@VitalikButerin',
    followers: '5.2M',
    trustScore: 98,
    tier: 'elite',
    verified: true,
    platform: 'twitter',
    fudCount: 0,
    accurateCallsCount: 247,
    bio: 'Co-founder of Ethereum. Research-driven, highly technical, rarely makes price predictions. Gold standard for credibility.',
    tags: ['ethereum', 'research', 'protocol'],
    weeklyChange: +1,
    totalPosts: 4821,
  },
  {
    id: 'inf-002',
    name: 'Nic Carter',
    handle: '@nic__carter',
    followers: '287K',
    trustScore: 94,
    tier: 'elite',
    verified: true,
    platform: 'twitter',
    fudCount: 2,
    accurateCallsCount: 189,
    bio: 'Partner at Castle Island Ventures. Rigorous data-driven analysis of Bitcoin and stablecoins. Transparent about positions.',
    tags: ['bitcoin', 'stablecoins', 'vc'],
    weeklyChange: +2,
    totalPosts: 12400,
  },
  {
    id: 'inf-003',
    name: 'QuantumChainAnalyst',
    handle: '@QuantumChainAnalyst',
    followers: '89K',
    trustScore: 91,
    tier: 'trusted',
    verified: true,
    platform: 'twitter',
    fudCount: 1,
    accurateCallsCount: 156,
    bio: 'On-chain analytics specialist. Known for debunking FUD with blockchain data. 91% accuracy on market calls.',
    tags: ['on-chain', 'analytics', 'data'],
    weeklyChange: +4,
    totalPosts: 3210,
  },
  {
    id: 'inf-004',
    name: 'Lyn Alden',
    handle: '@LynAldenContact',
    followers: '1.1M',
    trustScore: 89,
    tier: 'trusted',
    verified: true,
    platform: 'substack',
    fudCount: 0,
    accurateCallsCount: 203,
    bio: 'Macro analyst and investment strategist. Long-form research with institutional-grade analysis. Never hypes altcoins.',
    tags: ['macro', 'bitcoin', 'analysis'],
    weeklyChange: 0,
    totalPosts: 1840,
  },
  {
    id: 'inf-005',
    name: 'PlanB',
    handle: '@100trillionUSD',
    followers: '1.8M',
    trustScore: 83,
    tier: 'trusted',
    verified: false,
    platform: 'twitter',
    fudCount: 3,
    accurateCallsCount: 128,
    bio: 'Creator of the Stock-to-Flow model for Bitcoin valuation. Controversial among analysts but historically significant.',
    tags: ['bitcoin', 'models', 'price'],
    weeklyChange: -2,
    totalPosts: 7600,
  },
  {
    id: 'inf-006',
    name: 'Adam Back',
    handle: '@adam3us',
    followers: '618K',
    trustScore: 88,
    tier: 'trusted',
    verified: true,
    platform: 'twitter',
    fudCount: 1,
    accurateCallsCount: 174,
    bio: 'CEO of Blockstream, cryptographer, inventor of Hashcash. Deep technical expertise in Bitcoin protocol.',
    tags: ['bitcoin', 'cryptography', 'protocol'],
    weeklyChange: +1,
    totalPosts: 5920,
  },
  {
    id: 'inf-007',
    name: 'CryptoWhaleSpy',
    handle: '@CryptoWhaleSpy',
    followers: '412K',
    trustScore: 12,
    tier: 'malicious',
    verified: false,
    platform: 'twitter',
    fudCount: 47,
    accurateCallsCount: 8,
    bio: 'Known FUD amplifier with history of coordinated market manipulation. Multiple securities fraud allegations.',
    tags: ['fud', 'manipulation', 'bot-network'],
    weeklyChange: -8,
    totalPosts: 28400,
  },
  {
    id: 'inf-008',
    name: 'PumpMasterXXL',
    handle: '@PumpMasterXXL',
    followers: '892K',
    trustScore: 18,
    tier: 'malicious',
    verified: false,
    platform: 'twitter',
    fudCount: 63,
    accurateCallsCount: 12,
    bio: 'Serial pump-and-dump promoter. 63 confirmed FUD incidents. Large follower count acquired through bot purchases.',
    tags: ['pump-dump', 'scam', 'promotion'],
    weeklyChange: -5,
    totalPosts: 45200,
  },
  {
    id: 'inf-009',
    name: 'AlphaKingDefi',
    handle: '@AlphaKingDefi',
    followers: '234K',
    trustScore: 23,
    tier: 'risky',
    verified: false,
    platform: 'twitter',
    fudCount: 28,
    accurateCallsCount: 19,
    bio: 'Positions as DeFi alpha caller but consistently pushes tokens in which he holds undisclosed bags.',
    tags: ['defi', 'undisclosed-positions', 'risky'],
    weeklyChange: -3,
    totalPosts: 18700,
  },
  {
    id: 'inf-010',
    name: 'MoonBoys2049',
    handle: '@MoonBoys2049',
    followers: '567K',
    trustScore: 29,
    tier: 'risky',
    verified: false,
    platform: 'youtube',
    fudCount: 34,
    accurateCallsCount: 23,
    bio: 'YouTube-based influencer known for sensational price prediction videos. Monetized through affiliate links.',
    tags: ['youtube', 'price-calls', 'hype'],
    weeklyChange: -6,
    totalPosts: 8900,
  },
  {
    id: 'inf-011',
    name: 'RektReporter',
    handle: '@RektReporter',
    followers: '189K',
    trustScore: 31,
    tier: 'risky',
    verified: false,
    platform: 'twitter',
    fudCount: 22,
    accurateCallsCount: 31,
    bio: 'Reports on liquidations and crashes with high sensationalism. Accuracy rate of 38% on market calls.',
    tags: ['liquidations', 'doom', 'sensationalism'],
    weeklyChange: -1,
    totalPosts: 12300,
  },
  {
    id: 'inf-012',
    name: 'Willy Woo',
    handle: '@woonomic',
    followers: '1.0M',
    trustScore: 82,
    tier: 'trusted',
    verified: true,
    platform: 'twitter',
    fudCount: 4,
    accurateCallsCount: 167,
    bio: 'On-chain analytics pioneer. Creator of multiple BTC valuation metrics. Transparent methodology.',
    tags: ['on-chain', 'bitcoin', 'metrics'],
    weeklyChange: +1,
    totalPosts: 9800,
  },
]

// ================================================================
//  ENTITIES
// ================================================================
export const entities: Entity[] = [
  {
    id: 'ent-001',
    name: 'Binance',
    type: 'exchange',
    healthScore: 72,
    fudLevel: 'high',
    activeAlerts: 4,
    emoji: '🔶',
    color: '#f59e0b',
    details: {
      'Reserves': 'VERIFIED',
      'AUM': '$89.4B',
      'Users': '185M',
      '24h Volume': '$18.2B',
      'Jurisdiction': 'Global',
      'Regulatory': 'PENDING',
    },
    trend: 'declining',
    lastUpdated: '12 min ago',
    description: 'World\'s largest crypto exchange by trading volume. Currently under regulatory scrutiny in multiple jurisdictions.',
    riskTags: ['regulatory-risk', 'high-fud', 'withdrawal-watch'],
  },
  {
    id: 'ent-002',
    name: 'Tether (USDT)',
    type: 'stablecoin',
    healthScore: 88,
    fudLevel: 'medium',
    activeAlerts: 1,
    emoji: '💚',
    color: '#10b981',
    details: {
      'Backing': '102.3%',
      'Circulating': '$114B',
      'Attestor': 'Moore Cayman',
      'Peg Deviation': '±0.01%',
      'Minting': 'NORMAL',
      'Reserve Type': 'US Treasuries',
    },
    trend: 'stable',
    lastUpdated: '3 min ago',
    description: 'Largest stablecoin by market cap. Recent independent attestation confirms full backing with 102.3% reserve ratio.',
    riskTags: ['historical-fud', 'monitoring'],
  },
  {
    id: 'ent-003',
    name: 'Coinbase',
    type: 'exchange',
    healthScore: 94,
    fudLevel: 'low',
    activeAlerts: 0,
    emoji: '🔵',
    color: '#6366f1',
    details: {
      'Stock (COIN)': '$248.40',
      'Nasdaq Listed': 'YES',
      'SEC Status': 'COMPLIANT',
      'AUM': '$142B',
      'Users': '110M',
      'Uptime': '99.99%',
    },
    trend: 'improving',
    lastUpdated: '1 min ago',
    description: 'US-listed exchange and institutional custodian. Strong regulatory compliance track record and transparent operations.',
    riskTags: [],
  },
  {
    id: 'ent-004',
    name: 'Ethereum',
    type: 'layer1',
    healthScore: 96,
    fudLevel: 'minimal',
    activeAlerts: 0,
    emoji: '💎',
    color: '#a78bfa',
    details: {
      'Validators': '1.04M',
      'Staked ETH': '34.8M',
      'Network TPS': '~30 TPS',
      'Finality': '12.8s',
      'Uptime': '100%',
      'Dev Activity': 'VERY HIGH',
    },
    trend: 'stable',
    lastUpdated: '30s ago',
    description: 'The world\'s programmable blockchain. Post-Merge proof-of-stake network operating at peak efficiency with record validator count.',
    riskTags: [],
  },
  {
    id: 'ent-005',
    name: 'Solana',
    type: 'layer1',
    healthScore: 79,
    fudLevel: 'medium',
    activeAlerts: 2,
    emoji: '⚡',
    color: '#22d3ee',
    details: {
      'TPS': '65,000',
      'Validators': '1,875',
      'Uptime (30d)': '99.97%',
      'Last Incident': '2h ago',
      'Dev Activity': 'HIGH',
      'Stake Rate': '67%',
    },
    trend: 'stable',
    lastUpdated: '5 min ago',
    description: 'High-performance Layer 1 blockchain. Recent 11-minute degradation resolved. Core team deployed memory optimization fix.',
    riskTags: ['network-incidents', 'monitoring'],
  },
  {
    id: 'ent-006',
    name: 'Uniswap',
    type: 'defi',
    healthScore: 91,
    fudLevel: 'medium',
    activeAlerts: 1,
    emoji: '🦄',
    color: '#f43f5e',
    details: {
      'TVL': '$6.8B',
      'Daily Volume': '$1.2B',
      'Governance': 'ACTIVE',
      'Protocol Fee': '0.05%',
      'Chains': '15+',
      'SEC Risk': 'ELEVATED',
    },
    trend: 'stable',
    lastUpdated: '8 min ago',
    description: 'Largest decentralized exchange by volume. Under potential SEC scrutiny per recent unconfirmed reports.',
    riskTags: ['sec-watch', 'regulatory'],
  },
  {
    id: 'ent-007',
    name: 'MakerDAO',
    type: 'defi',
    healthScore: 85,
    fudLevel: 'low',
    activeAlerts: 0,
    emoji: '🏦',
    color: '#10b981',
    details: {
      'DAI Supply': '$5.1B',
      'Backing': '150%+ CR',
      'Governance': 'ACTIVE',
      'Revenue': '$216M/yr',
      'PSM': 'HEALTHY',
      'Risk Level': 'LOW',
    },
    trend: 'improving',
    lastUpdated: '15 min ago',
    description: 'Decentralized lending protocol and DAI stablecoin issuer. Governance recently approved Real World Asset expansion.',
    riskTags: ['defi-risk'],
  },
  {
    id: 'ent-008',
    name: 'Arbitrum',
    type: 'layer2',
    healthScore: 92,
    fudLevel: 'minimal',
    activeAlerts: 0,
    emoji: '🔷',
    color: '#22d3ee',
    details: {
      'TVL': '$12.4B',
      'TPS': '4,000+',
      'Fraud Proofs': 'ACTIVE',
      'Chains': 'L2 + Orbit',
      'Gas Savings': '95%',
      'Bridge Uptime': '100%',
    },
    trend: 'improving',
    lastUpdated: '2 min ago',
    description: 'Leading Ethereum L2 by TVL. Nitro upgrade delivered 10x throughput improvements. No security incidents to date.',
    riskTags: [],
  },
]

// ================================================================
//  CHART DATA
// ================================================================
export const activityChartData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${String(i).padStart(2,'0')}:00`,
  critical: [0,0,1,0,0,0,1,2,1,2,3,4,2,6,5,3,7,4,2,5,3,2,3,1][i],
  high: [1,1,2,1,1,2,2,3,4,5,6,5,7,8,7,6,8,9,7,6,5,4,4,3][i],
  medium: [2,3,2,4,2,3,4,5,7,8,9,8,10,12,10,9,11,13,10,9,8,7,6,5][i],
}))

export const entityActivityData = [
  { name: 'Mon', incidents: 2, resolved: 2 },
  { name: 'Tue', incidents: 5, resolved: 4 },
  { name: 'Wed', incidents: 3, resolved: 3 },
  { name: 'Thu', incidents: 8, resolved: 6 },
  { name: 'Fri', incidents: 12, resolved: 9 },
  { name: 'Sat', incidents: 4, resolved: 4 },
  { name: 'Sun', incidents: 6, resolved: 5 },
]

export const panicHistory = [3.2,2.8,3.1,2.5,2.9,4.1,4.8,3.9,3.4,3.8,4.2,4.0]
