import './globals.css'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'] })

export const metadata = {
  title: 'Event Ticket System',
  description: 'Demo ticket generation and scanning system for events',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baloo.className}>{children}</body>
    </html>
  )
}
