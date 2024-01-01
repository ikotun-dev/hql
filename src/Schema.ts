import { gql } from "apollo-server-express"; //will create a schema

const Schema = gql`
  type User {
    _id: ID!
    username: String
  }

  input CreateUserInput {
    username: String!
    password: String!
  }

  type Query {
    getAllUsers: [User]
    getUser(id: String): User
  }

  type Mutation {
    createUser(input: CreateUserInput): User
  }
`;


  

export default Schema; 
//export this Schema so we can use it in our project