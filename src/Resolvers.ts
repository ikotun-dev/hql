
import UserModel from "./models/user";

const Resolvers = {
  Query: {
    getAllUsers: async () => await UserModel.find(), 
    
    getUser: (_: any, args: any) => { 
      console.log(args);
    
      return UserModel.findById(args.id);
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: any) => {
        try {
          const user = await UserModel.create(input);
          return user;
        } catch (error) {
          console.error(error);
          throw new Error("Failed to create user");
        }
      },
  }
};
export default Resolvers;

