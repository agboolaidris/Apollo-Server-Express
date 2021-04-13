import { Post, User } from "../../Models";
export default {
  Query: {
    getAllPosts: async () => {
      try {
        const res = await Post.find({ relations: ["user"] });
        console.log(res);
        return res;
      } catch (error) {}
    },
    getPostByID: async (parent: any, { uuid }: any) => {
      try {
        const post = await Post.findOneOrFail({ uuid });
        return post;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createPost: async (
      parent: any,
      { newPost, userId }: any,
      context: any,
      info: any
    ) => {
      const { title, content, featureImg } = newPost;
      try {
        const user = await User.findOneOrFail({ uuid: userId });
        const post = new Post({ title, content, featureImg, user });
        await post.save();
        console.log(post);
        return post;
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
        return {
          uuid: post.uuid,
          successful: true,
          msg: "post deleted",
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
