import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Instrument_Serif, IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'], variable: '--font-display',
  weight: ['400'], style: ['normal', 'italic'],
})
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'], variable: '--font-heading',
  weight: ['400'], style: ['normal', 'italic'],
})
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'], variable: '--font-mono',
  weight: ['300', '400', '500'],
})
const inter = Inter({
  subsets: ['latin'], variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Aditya Prabhudessai — AI/ML Engineer & Full Stack Developer',
  description: 'Final-year engineer building AI systems, developer tools, and polished products. Based in Goa, India.',
  authors: [{ name: 'Aditya Prabhudessai' }],
  openGraph: {
    type: 'website',
    title: 'Aditya Prabhudessai',
    description: 'AI/ML Engineer & Full Stack Developer',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
