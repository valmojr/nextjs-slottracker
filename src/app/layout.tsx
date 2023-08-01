import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slot Tracker',
  description: 'Web Application for handling slots in any discord based event',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='flex min-h-screen flex-col items-center justify-between p-24'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
