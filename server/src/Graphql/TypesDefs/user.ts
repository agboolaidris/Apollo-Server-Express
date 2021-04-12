import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllUser: [User]!
  }

  extend type Mutation {
    createUser(inputUser: InputUser): User!
  }

  input InputUser {
    username: String!
    email: String!
    password: String!
    avater: String
  }
  type User {
    username: String!
    email: String!
    avater: String!
    uuid: ID!
  }
`;
