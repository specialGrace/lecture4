import express from 'express'
import {getUsers, createUser, loginUser} from '../controllers/usersController.js'
const router = express.Router();
// get all users route
router.route('/').get(getUsers)
router.route('/register').post(createUser)
router.route('/login').post(loginUser);


export default router