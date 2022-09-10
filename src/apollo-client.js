import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://wiki-kupu-kupu.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "cRZtW0Ydsvbu4T9EOPG6W7riI5TPZPXVogIlxgVnMPoGkkPGerB14n2dNe2Lvpiy",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://wiki-kupu-kupu.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "cRZtW0Ydsvbu4T9EOPG6W7riI5TPZPXVogIlxgVnMPoGkkPGerB14n2dNe2Lvpiy",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
