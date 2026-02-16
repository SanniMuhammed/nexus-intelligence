'use client'
import { useEffect, useState } from 'react'

interface StatCardProps {
  label: string
  value: string
  delta: string
  deltaPositive: boolean
  icon: string
  accentColor: string
  delay: number
}

function StatCard({
  label,
  value,
  delta,
  deltaPositive,
  icon,
  accentColor,
  delay,
}: StatCardProps) {
  return (
    <div
      className="bg-bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${accentColor}15` }}
        >
          {icon}
        </div>

        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border"
          style={{
            background: deltaPositive
              ? 'rgba(16,185,129,0.08)'
              : 'rgba(244,63,94,0.08)',
            color: deltaPositive ? '#10b981' : '#f43f5e',
            borderColor: deltaPositive
              ? 'rgba(16,185,129,0.2)'
              : 'rgba(244,63,94,0.2)',
          }}
        >
          <span>{deltaPositive ? '▲' : '▼'}</span>
          <span>{delta}</span>
        </div>
      </div>

      {/* Value */}
      <div
        className="text-3xl md:text-4xl font-extrabold leading-none mb-2"
        style={{ color: accentColor }}
      >
        {value}
      </div>

      {/* Label */}
      <div className="text-sm uppercase tracking-wide text-ink-muted">
        {label}
      </div>
    </div>
  )
}

export default function StatCards() {
  const stats: StatCardProps[] = [
    {
      label: 'Active FUD',
      value: '3',
      delta: '+1 / 1h',
      deltaPositive: false,
      icon: '🚨',
      accentColor: '#f43f5e',
      delay: 100,
    },
    {
      label: 'Influencers',
      value: '247',
      delta: '+12 wk',
      deltaPositive: true,
      icon: '👤',
      accentColor: '#6366f1',
      delay: 150,
    },
    {
      label: 'Entities',
      value: '42',
      delta: 'Stable',
      deltaPositive: true,
      icon: '🏛',
      accentColor: '#a78bfa',
      delay: 200,
    },
    {
      label: 'Accuracy',
      value: '99.4%',
      delta: '+0.2%',
      deltaPositive: true,
      icon: '📡',
      accentColor: '#10b981',
      delay: 250,
    },
    {
      label: 'Detection',
      value: '1.4s',
      delta: '0.3s faster',
      deltaPositive: true,
      icon: '⚡',
      accentColor: '#22d3ee',
      delay: 300,
    },
    {
      label: 'Tx / 24h',
      value: '18.2M',
      delta: 'Live',
      deltaPositive: true,
      icon: '🔗',
      accentColor: '#a78bfa',
      delay: 350,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {stats.map((s, i) => (
        <StatCard key={i} {...s} />
      ))}
    </div>
  )
}