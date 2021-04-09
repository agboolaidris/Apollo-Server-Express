import { gql } from "apollo-server-express";
export default gql`
  type Query {
    hi: String!
  }
  type Mutation {
    hello: String!
  }
`;
