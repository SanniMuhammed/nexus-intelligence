import { cn } from '@/lib/utils'
import { getHealthColor, getFudLevelConfig } from '@/lib/utils'

export function EntityCard({ entity }: { entity: any }) {
  const health = getHealthColor(entity.healthScore)
  const fudCfg = getFudLevelConfig(entity.fudLevel)

  const barColorClass =
    entity.healthScore >= 70
      ? 'bg-accent-success'
      : entity.healthScore >= 40
      ? 'bg-accent-warning'
      : 'bg-accent-danger'

  return (
    <div className="bg-bg-card rounded-2xl border border-border hover:border-border-strong transition-all duration-200 overflow-hidden shadow-sm">

      {/* Header */}
      <div className="p-5 border-b border-border">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-bg-subtle border border-border flex-shrink-0">
            {entity.emoji}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-ink-primary">
                  {entity.name}
                </h3>
                <p className="text-sm text-ink-muted uppercase tracking-wider mt-0.5">
                  {entity.type}
                </p>
              </div>

              {entity.activeAlerts > 0 && (
                <span className="text-xs px-3 py-1 rounded-full bg-rose-dim/10 text-rose-bright border border-rose-DEFAULT/20 whitespace-nowrap font-medium">
                  {entity.activeAlerts} Alert
                </span>
              )}
            </div>

            <p className="text-sm text-ink-secondary mt-3 leading-relaxed line-clamp-2">
              {entity.description}
            </p>
          </div>
        </div>
      </div>

      {/* Health Section */}
      <div className="p-5 border-b border-border">
        <div className="flex items-end justify-between mb-3">
          <span className="text-xs text-ink-muted uppercase tracking-wider">
            Health Score
          </span>
          <span
            className="text-3xl font-bold leading-none"
            style={{ color: health.text }}
          >
            {entity.healthScore}
          </span>
        </div>

        <div className="h-2.5 w-full bg-bg-elevated rounded-full overflow-hidden">
          <div
            className={cn('h-full rounded-full transition-all', barColorClass)}
            style={{ width: `${entity.healthScore}%` }}
          />
        </div>

        <div className="flex items-center justify-between mt-3 text-sm">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: fudCfg.color }}
            />
            <span className="text-ink-muted">
              FUD: <span className="text-ink-primary font-medium">{fudCfg.label}</span>
            </span>
          </div>

          <span className="text-ink-muted">
            {entity.lastUpdated}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 space-y-4">

        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {Object.entries(entity.details).map(([key, val]) => {
            const isPositive = ['VERIFIED', 'COMPLIANT', 'YES', 'ACTIVE', 'STABLE', 'HEALTHY'].includes(val as string)
            const isWarning = ['PENDING', 'ELEVATED', 'MONITORING'].includes(val as string)

            const valueColor =
              isPositive
                ? 'text-accent-success'
                : isWarning
                ? 'text-accent-warning'
                : 'text-ink-primary'

            return (
              <div key={key}>
                <span className="text-xs text-ink-muted uppercase tracking-wider block mb-1">
                  {key}
                </span>
                <span className={cn('text-sm font-medium', valueColor)}>
                  {val}
                </span>
              </div>
            )
          })}
        </div>

        {entity.riskTags?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {entity.riskTags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-rose-dim/10 text-rose-bright border border-rose-DEFAULT/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}