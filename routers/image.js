const express = require('express')
const router = express.Router()
const Image = require('../models').image

router.get('/', async (req, res, next) => {
	try {
		const allImages = await Image.getAll()
		console.log(allImages)
	} catch (e) {
		console.log('error', e)
	}
})

module.exports = router