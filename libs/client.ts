import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        robots: offsetLimitPagination(),
      },
    },
  },
});

export default new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: 'https://proxy-tohaly.herokuapp.com/v1/graphql',
  }),
  cache,
});
