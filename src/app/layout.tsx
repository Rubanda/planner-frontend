import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Provider from '@/components/session-provider'
import { SiteHeader } from '@/components/layouts/site-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wedding planner app',
  description: 'Wedding planner app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = null
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
        <Provider >
           {children}
        </Provider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
