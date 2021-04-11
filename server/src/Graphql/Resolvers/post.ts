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
      { updatePost, uuid }: any,
      context: any,
      info: any
    ) => {
      const { title, content, featureImg } = updatePost;
      try {
        const post = await Post.findOneOrFail({ uuid });
        post.title = title || post.title;
        post.content = content || post.content;
        post.featureImg = featureImg || post.featureImg;

        await post.save();
        return post;
      } catch (error) {
        console.log(error);
      }
    },
    deletePostByID: async (parent: any, { uuid }: any) => {
      try {
        const post = await Post.findOneOrFail({ uuid });
        await post.remove();
        return post;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
