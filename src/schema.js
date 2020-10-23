const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    me: String!
  }

  # type Mutation {}

  # type Subscription {}
`;

module.exports = typeDefs;
