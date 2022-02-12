import { Schema, model, Document } from "mongoose";
import { Rating } from "./Rating";

// An interface is needed that way you know
// How is the model suposed to look
export interface User extends Document {
  name: string;
  email: string;
  password: string;
  type: string;
  rating: Rating['_id'];
  age: number;
  nationality: string;
}

// mongoose model schema
const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: {type: String, enum: ['player', 'provider'], default: 'player'},
  rating: { type: Schema.Types.ObjectId},
  age: { type: Number},
  nationality: { type: String},
});

UserSchema.methods.toJSON = function () {
  const { password, __v, ...user} = this.toObject();
  return user;
}

export default model<User>('User', UserSchema);