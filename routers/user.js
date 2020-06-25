const express = require('express')
const router = express.Router()
const User = require('../models').user

router.get('/', (req, res, next) => {
	try {
		const allUsers = await User.findAll()
		console.log(allUsers)
	} catch (e) {
		console.log('error', e)
	}
})

module.exports = router