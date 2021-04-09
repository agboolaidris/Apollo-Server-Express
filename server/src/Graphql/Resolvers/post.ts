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
        await Post.insert({
          title,
          content,
          featureImg,
        });

        return newPost;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
