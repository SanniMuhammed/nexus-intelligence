# NEXUS Intelligence Platform

A professional crypto intelligence dashboard built with Next.js 14, Tailwind CSS.

## Features

- **Dashboard** — Panic meter, stat cards, live FUD feed, activity chart, influencer widget, entity health
- **FUD Radar** (`/fud`) — Searchable feed with AI verdicts, bot amplification data, detailed analysis
- **Influencers** (`/influencers`) — Full leaderboard with trust scores, profile cards, tier filtering
- **Entities** (`/entities`) — Health monitoring for 8 major crypto entities with live health bars

## Design System

| Token | Value |
|---|---|
| Background | `#07070f` → `#0c0c1d` → `#0f0f22` |
| Accent Indigo | `#6366f1` |
| Accent Cyan | `#22d3ee` |
| Accent Rose | `#f43f5e` |
| Accent Emerald | `#10b981` |
| Accent Amber | `#f59e0b` |
| Text Primary | `#f1f5f9` |
| Text Secondary | `#94a3b8` |
| Text Muted | `#475569` |

**Fonts:** Syne (display) + Manrope (body) + JetBrains Mono (data)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nexus-app/
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Dashboard homepage
│   ├── globals.css         # Design tokens & base styles
│   ├── fud/page.tsx        # FUD Radar page
│   ├── influencers/        # Influencer leaderboard
│   └── entities/           # Entity health monitor
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx     # Fixed left navigation
│   │   ├── TopBar.tsx      # Sticky header with clock
│   │   └── MarketTicker.tsx # Scrolling price ticker
│   └── dashboard/
│       ├── PanicMeter.tsx  # Animated gauge
│       ├── StatCards.tsx   # 6 KPI cards
│       ├── ActivityChart.tsx # Recharts bar chart
│       ├── FudFeed.tsx     # Live event feed
│       ├── InfluencerWidget.tsx # Trust leaderboard
│       └── EntityMiniGrid.tsx  # Health overview
└── lib/
    ├── data.ts             # All sample data & types
    └── utils.ts            # Helpers & color configs
```

## Key Libraries

- **Next.js 14** — App Router, Server/Client components
- **Tailwind CSS** — Custom design system with extended colors
- **Recharts** — Activity charts with custom tooltips
- **Lucide React** — Icon system
- **Framer Motion** — (optional) Page transitions
