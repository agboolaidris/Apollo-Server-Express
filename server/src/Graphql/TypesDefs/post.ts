import { gql } from "apollo-server-express";
export default gql`
  extend type Query {
    getAllPosts: [Post!]!
  }
  extend type Mutation {
    createPost(newPost: NewPost): Post!
  }
  input NewPost {
    title: String!
    content: String!
    featureImg: String
  }
  type Post {
    title: String!
    content: String!
    featureImg: String
    created_at: String
    updated_at: String
  }
`;
