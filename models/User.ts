import { Schema, model, Document } from "mongoose";
import { Rating } from "./Rating";

// An interface is needed that way you know
// How is the model suposed to look
export interface User extends Document {
  name: string;
  email: string;
  password: string;
  rating: Rating['_id'];
  age: number;
  nationality: string;
}

// mongoose model schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rating: { type: Schema.Types.ObjectId, required: true },
  age: { type: Number, required: true },
  nationality: { type: String, required: true },
});

export default model<User>('User', UserSchema);