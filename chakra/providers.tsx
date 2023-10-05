'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import TurbusTheme from '../themes/turbus'

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS theme={TurbusTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
