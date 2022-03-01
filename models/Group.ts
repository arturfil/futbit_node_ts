import { Document, model, Schema, Types } from 'mongoose';
import { User } from './User';

export interface Group {
    player: Types.ObjectId;
}

const GroupSchema = new Schema<Group>({
    player: {type: Schema.Types.ObjectId}
})

export default model<Group>('Group', GroupSchema);