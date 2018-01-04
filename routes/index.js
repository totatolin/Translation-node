import test from './test'
import img from './img'

export default app => {
	app.use('/proxy-api/test', test);
	app.use('/proxy-api/img', img)
}