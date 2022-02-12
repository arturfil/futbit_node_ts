import { Schema, model, Document } from 'mongoose';

export interface Field extends Document {
  address: string;
  name: string;
}

const FieldSchema = new Schema<Field>({
  address: {type: String, required: true, unique: true},
  name: {type: String, required: true, unique: true}
})

export default model<Field>('Field', FieldSchema)