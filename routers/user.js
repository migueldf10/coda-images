const express = require('express')
const router = express.Router()
const User = require('../models').user
const bcrypt = require('bcrypt')

router.get('/', async (req, res, next) => {
	const limit = Math.min(req.query.limit || 25, 100)
	const offset = req.query.offset || 0
	try {
		const result = await User.findAndCountAll({ limit, offset })
		res.send({ images: result.rows, total: result.count })
		console.log(result)
	} catch (e) {
		console.log('error', e)
	}
})



router.post('/', async (req, res, next) => {
	try {
		const { email, password, fullName } = req.body
		if (!email || !password || !fullName) {
			return res.send('send valid user objects')
		}
		const hashedPassword = bcrypt.hashSync(password, 10);
		const newUser = await User.create({
			email,
			password: hashedPassword,
			fullName
		})
		res.send(newUser)
		console.log(newUser)
	} catch (e) {
		console.log('error', e)
	}
})

module.exports = router