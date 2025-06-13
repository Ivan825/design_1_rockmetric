import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rockmetric - AI-Powered Business Analytics',
  description: 'Transform data into business impact with AI-powered analytics. Seamlessly integrate with Power BI for enhanced insights.',
  keywords: 'AI analytics, business intelligence, Power BI, data analysis, predictive analytics',
  authors: [{ name: 'Rockmetric' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Rockmetric - AI-Powered Business Analytics',
    description: 'Transform data into business impact with AI-powered analytics',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rockmetric - AI-Powered Business Analytics',
    description: 'Transform data into business impact with AI-powered analytics',
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
        <link rel="icon" type="image/png" href="/image.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}