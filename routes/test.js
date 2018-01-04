import express from 'express'
import Test from '../controller/test'
const router = express.Router();
console.log(router)

router.get('/test', Test.getData);
router.post('/add', Test.addData);

export default router