import { Schema, model } from "mongoose";
import { Field } from "./Field";
import { User } from "./User";

interface Game {
  field: Field["_id"];
  time: string;
  date: Date;
  player: User["_id"];
}

const GameSchema = new Schema<Game>({
  field: { type: Schema.Types.ObjectId, required: true, ref: "Field" },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  player: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export default model<Game>("Game", GameSchema);
