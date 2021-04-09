import { Post } from "../../Models";

export default {
  Query: {
    getAllPosts: async () => {
      try {
        return [
          {
            title: "Welocme to graphql",
            content: "hahhhhhhhh bh",
          },
        ];
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
        const res = await Post.insert({
          title,
          content,
        });
        console.log(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
