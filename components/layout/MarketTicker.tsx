const tickers = [
  { symbol: 'BTC', price: '$97,412', change: '+2.34%', up: true },
  { symbol: 'ETH', price: '$3,847', change: '+1.87%', up: true },
  { symbol: 'SOL', price: '$198.45', change: '-0.64%', up: false },
  { symbol: 'BNB', price: '$589.10', change: '+0.92%', up: true },
  { symbol: 'XRP', price: '$2.89', change: '+4.21%', up: true },
]

export default function MarketTicker() {
  const doubled = [...tickers, ...tickers]

  return (
    <div className="h-10 bg-bg-card border-b border-border overflow-hidden flex items-center relative">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-6">
            <span className="font-mono text-xs font-semibold text-ink-secondary">
              {t.symbol}
            </span>
            <span className="font-mono text-xs text-ink-DEFAULT">
              {t.price}
            </span>
            <span className={`font-mono text-xs ${t.up ? 'text-emerald-DEFAULT' : 'text-rose-DEFAULT'}`}>
              {t.change}
            </span>
            <span className="opacity-30 text-sm">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}