import { Schema, model } from "mongoose";

// An interface is needed that way you know
// How is the model suposed to look
interface User {
  name: string;
  email: string;
  password: string;
  score: number;
  age: number;
  nationality: string;
}

// mongoose model schema
const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  score: { type: Number, required: true },
  age: { type: Number, required: true },
  nationality: { type: String, required: true },
});

export default model<User>('User', UserSchema);