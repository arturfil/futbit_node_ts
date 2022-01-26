import { Schema, model } from 'mongoose';

interface Field {
  address: string;
  name: string;
}

const FieldSchema = new Schema<Field>({
  address: {type: String, required: true},
  name: {type: String, required: true}
})

export default model<Field>('Field', FieldSchema)