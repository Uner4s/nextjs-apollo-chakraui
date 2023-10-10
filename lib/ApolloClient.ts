import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { StoreObject } from '@apollo/client/utilities'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri:
        `${process.env.GRAPHQL_API}/graphql` || 'http://localhost:3000/graphql',
    }),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (
  initialState?: Record<string, StoreObject>,
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()

    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === 'undefined') {
    return _apolloClient
  }

  if (!apolloClient) {
    apolloClient = _apolloClient
  }
  return _apolloClient
}

export const useApollo = (
  initialState?: Record<string, StoreObject>,
): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
