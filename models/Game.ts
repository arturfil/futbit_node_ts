import { Schema, model } from 'mongoose';
import Field from './Field';
import User from './User';

interface Game {
  place: typeof Field;
  time: string;
  date: Date;
  player: typeof User;

}

const GameSchema = new Schema<Game>({
  place: { type: Schema.Types.ObjectId, required: true},
  time: { type: String, required: true},
  date: {type: Date, required: true},
  player : { type: Schema.Types.ObjectId, required: true},
})

export default model<Game>('Game', GameSchema);