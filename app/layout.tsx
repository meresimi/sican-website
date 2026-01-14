import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SICAN - Solomon Islands Climate Action Network',
  description: 'Rising Togetherness for Climate Change. SICAN is a network of 15 organizations united to protect Solomon Islands from climate change through advocacy, community empowerment, and climate justice.',
  keywords: ['Solomon Islands', 'climate change', 'climate action', 'SICAN', 'Pacific', 'climate justice', 'PICAN'],
  authors: [{ name: 'SICAN' }],
  openGraph: {
    title: 'SICAN - Solomon Islands Climate Action Network',
    description: 'Rising Togetherness for Climate Change',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.solomonislands-can.org',
    siteName: 'SICAN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
