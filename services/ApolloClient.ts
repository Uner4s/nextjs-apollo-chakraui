import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: `${process.env.GRAPHQL_API}/graphql` || 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})
