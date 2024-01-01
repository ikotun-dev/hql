//get all of the available data from our database.
import UserModel from "./models/user";

const Resolvers = {
  Query: {
    getAllUsers: async () => await UserModel.find(), //if the user runs the getAllPeople command
    //if the user runs the getPerson command:
    getUser: (_: any, args: any) => { 
      console.log(args);
      //get the object that contains the specified ID.
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

