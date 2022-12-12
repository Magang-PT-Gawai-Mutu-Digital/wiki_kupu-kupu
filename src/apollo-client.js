import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://katalogkupu-kupu.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "LOUtjqpvcxTF0L8F0UYY5YzdIP1hE2t3RwjDmV7rE1eIZ5XzhNwzqRIYrfednHEI",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://katalogkupu-kupu.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "LOUtjqpvcxTF0L8F0UYY5YzdIP1hE2t3RwjDmV7rE1eIZ5XzhNwzqRIYrfednHEI",
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
