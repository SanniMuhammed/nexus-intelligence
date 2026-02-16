import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Nexus Intelligence',
  description: 'Crypto Narrative Risk Intelligence Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-main text-ink-primary antialiased">
        
        {/* Top Navigation */}
        <header className="border-b border-border bg-bg-card">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            
            {/* Logo / Home Link */}
            <Link
              href="/"
              className="font-semibold text-lg hover:text-ink-muted transition-colors"
            >
              Nexus
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/dashboard" className="text-ink-muted hover:text-ink-primary transition-colors">  
                Dashboard
              </Link>

              <Link href="/influencers" className="text-ink-muted hover:text-ink-primary transition-colors">
                Influencers
              </Link>

              <Link href="/entities" className="text-ink-muted hover:text-ink-primary transition-colors">
                Entities
              </Link>

              <Link href="/fud" className="text-ink-muted hover:text-ink-primary transition-colors">
                Fud
              </Link>
            </nav>

          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>

      </body>
    </html>
  )
}