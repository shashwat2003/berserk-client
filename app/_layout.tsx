import '@/tamagui/euclid/index.css'
import '@/tamagui/tamagui.css'
import './_layout.css'

import { TamaguiRootProvider } from '@/tamagui/root-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SchemeProvider } from '@vxrn/color-scheme'
import { LoadProgressBar, Slot } from 'one'

/**
 * The root _layout.tsx filters <html /> and <body /> out on native
 */

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.svg" />

        <title>Berserk Client (beta)</title>
      </head>

      <body>
        <LoadProgressBar />

        <SchemeProvider>
          <TamaguiRootProvider>
            <QueryClientProvider client={queryClient}>
              <Slot />
            </QueryClientProvider>
          </TamaguiRootProvider>
        </SchemeProvider>
      </body>
    </html>
  )
}
