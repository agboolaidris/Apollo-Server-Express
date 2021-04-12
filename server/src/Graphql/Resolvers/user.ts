import { User } from "../../Models/index";
export default {
  Query: {
    getAllUser: async (parent: any, args: any) => {
      try {
        const user = await User.find({ relations: ["posts"] });
        console.log(user);
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    createUser: async (parent: any, { inputUser }: any) => {
      const { username, email, password, avater } = inputUser;
      try {
        const user = User.create({
          username,
          password,
          email,
          avater,
        });

        await user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
