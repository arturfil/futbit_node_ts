import { Document, model, Schema } from 'mongoose';
import { User } from './User';

export interface Group extends Document {
    player: User['_id']
}

const GroupSchema = new Schema({
    user: {type: Schema.Types.ObjectId}
})

export default model<Group>('Group', GroupSchema);