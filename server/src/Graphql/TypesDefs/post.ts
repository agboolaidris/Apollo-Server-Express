import { gql } from "apollo-server-express";
export default gql`
  extend type Query {
    getAllPosts: [Post!]!
  }
  extend type Mutation {
    createPost(newPost: InputPost!): Post!
    updatePostByID(updatePost: InputPost!, uuid: ID!): Post!
    deletePostByID(uuid: ID!): Post!
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
  }
`;
