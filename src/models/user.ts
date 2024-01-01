import { Schema, Document, model } from 'mongoose';

interface UserInterface extends Document { 
    username : string;
    password : string;
}

const UserSchema = new Schema<UserInterface>({
      username :  { 
        required: true,
        type: String
      },
      password : {
        required: true,
        type: String
      }
})

const UserModel =  model<UserInterface>('User', UserSchema)

export default UserModel


