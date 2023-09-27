import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {LayoutBreakpoint} from "@/components/layouts/LayoutBreakpoint";



const inter = Inter({ subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
  title: 'Github Searching Id',
  description: ' Ferramenta perfeita para acessar dados detalhados de perfis GitHub de maneira rápida e gratuita',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
              <LayoutBreakpoint>
                  {children}
              </LayoutBreakpoint>
      </body>
    </html>
  )
}
