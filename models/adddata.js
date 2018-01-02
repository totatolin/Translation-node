import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const dataSchema = new Schema({
	id: Number,
	name: String
})

dataSchema.index({id: 1})

const Adddata = mongoose.model('AddData', dataSchema);

export default Adddata