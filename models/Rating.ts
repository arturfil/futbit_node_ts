import { Document, model, Schema } from 'mongoose';
import { User } from './User';

export interface Rating extends Document {
    user: User['_id']
    attendance: number;
    goals: number;
    gamesPlayed: number;
    gamesWon: number;
    manOfTheMatch: number;
    attitude: number;
    involment: number;
}

const RatingSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    attendance: {type: Number},
    gamesPlayed: {type: Number},
    goals: {type: Number},
    gamesWon: {type: Number},
    manOfTheMatch: {type: Number},
    attitude: {type: Number},
    involvement: {type: Number}
})

export default model<Rating>('Rating', RatingSchema);