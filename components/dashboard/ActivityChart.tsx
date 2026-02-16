'use client'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { activityChartData } from '@/lib/data'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null

  return (
    <div className="bg-bg-elevated border border-border rounded-xl p-4 shadow-lg">
      <p className="font-mono text-xs text-ink-muted mb-3">
        {label}
      </p>

      {payload.map((p: any) => (
        <div key={p.name} className="flex items-center gap-3 text-sm mb-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ background: p.fill }}
          />
          <span className="text-ink-muted capitalize">
            {p.name}:
          </span>
          <span className="font-mono text-ink-primary font-semibold">
            {p.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function ActivityChart() {
  return (
    <div className="bg-bg-card rounded-2xl border border-border overflow-hidden shadow-sm">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 border-b border-border">

        <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-muted">
          FUD Activity — 24h
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          {[
            { label: 'Critical', color: '#f43f5e' },
            { label: 'High', color: '#f59e0b' },
            { label: 'Medium', color: '#6366f1' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ background: l.color, opacity: 0.8 }}
              />
              <span className="text-xs text-ink-muted">
                {l.label}
              </span>
            </div>
          ))}

          <span className="text-xs px-3 py-1 rounded-full bg-indigo-DEFAULT/10 text-indigo-bright border border-indigo-DEFAULT/20 font-medium">
            LIVE
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="px-4 sm:px-6 py-6" style={{ height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activityChartData}
            barSize={10}
            barGap={2}
          >
            <CartesianGrid
              vertical={false}
              stroke="rgba(148,163,184,0.08)"
            />

            <XAxis
              dataKey="hour"
              tick={{
                fill: '#64748b',
                fontSize: 11,
                fontFamily: 'JetBrains Mono',
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: '#64748b',
                fontSize: 11,
                fontFamily: 'JetBrains Mono',
              }}
              tickLine={false}
              axisLine={false}
              width={30}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255,255,255,0.04)' }}
            />

            <Bar
              dataKey="critical"
              stackId="a"
              fill="rgba(244,63,94,0.8)"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              dataKey="high"
              stackId="a"
              fill="rgba(245,158,11,0.7)"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              dataKey="medium"
              stackId="a"
              fill="rgba(99,102,241,0.6)"
              radius={[4, 4, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}