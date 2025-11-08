import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'San Diego Senior Care | Compassionate In-Home Caregiving',
  description: 'Give your parents the care they deserve. Professional in-home senior care services in San Diego County. Get your free consultation today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

