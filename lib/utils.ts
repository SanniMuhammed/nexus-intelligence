import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Severity, Influencer } from './data'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSeverityConfig(severity: Severity) {
  const configs = {
    critical: {
      color: '#f43f5e',
      bg: 'rgba(244,63,94,0.1)',
      border: 'rgba(244,63,94,0.25)',
      label: 'CRITICAL',
      textClass: 'text-rose-DEFAULT',
    },
    high: {
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.1)',
      border: 'rgba(245,158,11,0.25)',
      label: 'HIGH',
      textClass: 'text-amber-DEFAULT',
    },
    medium: {
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.08)',
      border: 'rgba(245,158,11,0.2)',
      label: 'MEDIUM',
      textClass: 'text-amber-DEFAULT',
    },
    low: {
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.1)',
      border: 'rgba(99,102,241,0.2)',
      label: 'LOW',
      textClass: 'text-indigo-DEFAULT',
    },
    contained: {
      color: '#10b981',
      bg: 'rgba(16,185,129,0.1)',
      border: 'rgba(16,185,129,0.2)',
      label: 'CONTAINED',
      textClass: 'text-emerald-DEFAULT',
    },
  }
  return configs[severity]
}

export function getVerdictConfig(type: string) {
  const configs: Record<string, { color: string; bg: string; label: string }> = {
    fabricated: { color: '#f43f5e', bg: 'rgba(244,63,94,0.08)', label: 'FABRICATED FUD' },
    unverified: { color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', label: 'UNVERIFIED' },
    confirmed: { color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', label: 'CONFIRMED' },
    neutralized: { color: '#10b981', bg: 'rgba(16,185,129,0.08)', label: 'NEUTRALIZED' },
  }
  return configs[type] ?? configs.unverified
}

export function getTierConfig(tier: Influencer['tier']) {
  const configs = {
    elite: { color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.25)', label: 'ELITE' },
    trusted: { color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', label: 'TRUSTED' },
    neutral: { color: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.15)', label: 'NEUTRAL' },
    risky: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', label: 'RISKY' },
    malicious: { color: '#f43f5e', bg: 'rgba(244,63,94,0.1)', border: 'rgba(244,63,94,0.25)', label: 'MALICIOUS' },
  }
  return configs[tier]
}

export function getFudLevelConfig(level: string) {
  const map: Record<string, { color: string; label: string }> = {
    critical: { color: '#f43f5e', label: 'CRITICAL' },
    high:     { color: '#f59e0b', label: 'HIGH' },
    medium:   { color: '#f59e0b', label: 'MEDIUM' },
    low:      { color: '#6366f1', label: 'LOW' },
    minimal:  { color: '#10b981', label: 'MINIMAL' },
  }
  return map[level] ?? map.medium
}

export function getHealthColor(score: number) {
  if (score >= 90) return { gradient: 'from-emerald-DEFAULT to-cyan-DEFAULT', text: '#10b981' }
  if (score >= 75) return { gradient: 'from-indigo-DEFAULT to-cyan-DEFAULT', text: '#6366f1' }
  if (score >= 60) return { gradient: 'from-amber-DEFAULT to-amber-bright', text: '#f59e0b' }
  return { gradient: 'from-rose-DEFAULT to-rose-bright', text: '#f43f5e' }
}

export function getTrustBarColor(score: number) {
  if (score >= 80) return 'from-emerald-DEFAULT to-cyan-DEFAULT'
  if (score >= 60) return 'from-indigo-DEFAULT to-cyan-DEFAULT'
  if (score >= 40) return 'from-amber-DEFAULT to-amber-bright'
  return 'from-rose-DEFAULT to-rose-bright'
}
