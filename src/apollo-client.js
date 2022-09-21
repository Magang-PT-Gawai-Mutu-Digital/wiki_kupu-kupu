import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://wikikupukupu.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "JmFfpn0aKeAM4L4gTKr8mo5bF245xmFcA6L3Hqi0sF10JWHy8gy6wkBUFuEnh5nj",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://wikikupukupu.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "JmFfpn0aKeAM4L4gTKr8mo5bF245xmFcA6L3Hqi0sF10JWHy8gy6wkBUFuEnh5nj",
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
