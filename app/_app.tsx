import '@app/styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import { type AppType } from 'next/dist/shared/lib/utils'

import { ChakraProviders } from '../chakra/providers'
import { client as ApolloClient } from '../services/ApolloClient'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProviders>
      <ApolloProvider client={ApolloClient}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </ChakraProviders>
  )
}

export default MyApp
