import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyles from "@/styles/GlobalStyles";
import {LayoutBreakpoint} from "@/components/layouts/LayoutBreakpoint";


const inter = Inter({ subsets: ['latin'] })

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
      <StyledComponentsRegistry>
          <GlobalStyles />
            <LayoutBreakpoint>
                {children}
            </LayoutBreakpoint>
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}
