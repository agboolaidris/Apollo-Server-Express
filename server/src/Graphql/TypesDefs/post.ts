import { gql } from "apollo-server-express";
export default gql`
  extend type Query {
    getAllPosts: [Post!]!
    getPostByID(uuid: ID!): Post!
  }
  extend type Mutation {
    createPost(newPost: InputPost!, userId: String): Post!
    updatePostByID(updatePost: InputPost!, uuid: ID!): Post!
    deletePostByID(uuid: ID!): Msg!
  }
  input InputPost {
    title: String!
    content: String!
    featureImg: String
  }
  type Post {
    uuid: ID!
    title: String!
    content: String!
    featureImg: String
    created_at: String
    updated_at: String
    user: User
  }
  type Msg {
    uuid: ID!
    msg: String!
    successful: Boolean!
  }
`;
