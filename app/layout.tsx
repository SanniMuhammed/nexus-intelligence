import "./globals.css"

export const metadata = {
  title: "Nexus Intelligence",
  description: "AI-Powered FUD Detection Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen">
          <header className="border-b bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
              <h1 className="text-xl md:text-2xl font-bold">
                Nexus Intelligence
              </h1>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}