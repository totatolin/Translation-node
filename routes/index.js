import test from './test'

export default app => {
	app.use('/proxy-api/test', test);
}