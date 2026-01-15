import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SICAN - Solomon Islands Climate Action Network',
  description: 'Rising Togetherness for Climate Change. SICAN is a network of 15 organizations united to protect Solomon Islands from climate change through advocacy, community empowerment, and climate justice.',
  keywords: ['Solomon Islands', 'climate change', 'climate action', 'SICAN', 'Pacific', 'climate justice', 'PICAN'],
  authors: [{ name: 'SICAN' }],
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'SICAN - Solomon Islands Climate Action Network',
    description: 'Rising Togetherness for Climate Change',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.solomonislands-can.org',
    siteName: 'SICAN',
    images: [
      {
        url: '/images/sican-logo-512.png',
        width: 512,
        height: 512,
        alt: 'SICAN Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/sican-icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
