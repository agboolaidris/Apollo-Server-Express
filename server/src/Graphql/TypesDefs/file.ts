import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    file: String
  }

  extend type Mutation {
    fileUploader(file: Upload!): Pathname!
  }

  type Pathname {
    pathname: String!
  }
`;
