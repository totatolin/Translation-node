import mongoose from 'mongoose';
import initData from '../InitData/initData'

const schema = new mongoose.Schema({
	data: {}
});

schema.statics.getData = function () {
	return new Promise(async (resolve, reject) => {
		const res = await this.findOne();
		console.log(res.data);
		// resolve.send(res)
		resolve(res)
	})
}

const Data = mongoose.model('Data', schema);

Data.findOne((err, data) => {
	if (!data) {
		Data.create({data: initData})
	}
})

export default Data