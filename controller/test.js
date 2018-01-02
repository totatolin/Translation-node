import Data from '../models/data.js'
import Add from '../models/adddata.js'
import formidable from 'formidable'

class Test {
	constructor () {

	}
	async getData (req, res) {
		// const aaa = await Data.getData();
		// res.send(aaa);
		const aaa = await Add.find();
		res.send(aaa);
	}
	async addData (req, res) {
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields) => {
			const {id, name} = fields
			const param = {
				id,
				name
			}
			await Add.create(param);
			res.send({
				status: 0,
				success: 'success'
			})
		})
	}
}

export default new Test()