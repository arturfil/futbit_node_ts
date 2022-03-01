import { Document, model, Schema, Types } from 'mongoose';
import { User } from './User';

export interface Rating {
    user: Types.ObjectId
    attendance: number;
    goals: number;
    gamesPlayed: number;
    gamesWon: number;
    manOfTheMatch: number;
    attitude: number;
    involvement: number;
}

const RatingSchema = new Schema<Rating>({
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