import './globals.css'
import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform for The Future'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={orbitron.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
