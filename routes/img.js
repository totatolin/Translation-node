import express from 'express';
const fs = require('fs');
const router = express.Router();

router.get('/img', function (req, res) {
	fs.readFile('./1.png', 'binary', function (err, file) {
		if (err) {
			console.log(err);
			return;
		} else {
			let base = 'data:image/png;base64,' + new Buffer(file, 'binary').toString('base64')
			// console.log(base)
			console.log('testtest')
			res.writeHead(200, {'Content-Type':'image/png'})
			res.write(base,'binary')
			res.send();
		}
	})
});

export default router