import { Post } from "../../Models";

export default {
  Query: {
    getAllPosts: async () => {
      try {
        const res = await Post.find();
        return res;
      } catch (error) {}
    },
  },
  Mutation: {
    createPost: async (
      parent: any,
      { newPost }: any,
      context: any,
      info: any
    ) => {
      const { title, content, featureImg } = newPost;

      try {
        const user = Post.create({ title, content, featureImg });
        await user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    updatePostByID: async (
      parent: any,
      { updatePost, id }: any,
      context: any,
      info: any
    ) => {
      try {
        const { title, content, featureImg } = updatePost;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
