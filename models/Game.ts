import { Schema, model, Types } from "mongoose";
import { Field } from "./Field";
import { User } from "./User";

interface Game {
  field: Types.ObjectId;
  time: string;
  date: Date;
  player: Types.ObjectId;
}

const GameSchema = new Schema<Game>({
  field: { type: Schema.Types.ObjectId, required: true, ref: "Field" },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  player: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export default model<Game>("Game", GameSchema);
