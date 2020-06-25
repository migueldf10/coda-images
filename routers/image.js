const express = require('express');
const { response } = require('express');
const router = express.Router()
const Image = require('../models').image



function learnRegExp(url) {
	return /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(url);
}



router.get('/', async (req, res, next) => {
	try {
		const allImages = await Image.findAll()
		// getAll({limit: 2, offset: 2})
		res.json({ allImages })
	} catch (e) {
		res.send('getting all images didn\' t work')
		console.log('error', e)
	}
})
router.post('/', async (req, res, next) => {
	try {
		if (learnRegExp(req.body.url)) {
			const newImage = await Image.create({ url: req.body.url, title: req.body.title })
			res.send(newImage)
		} else {
			res.send('provide a valid url')
		}
	} catch (e) {
		res.send('post image didn\' t work')
		console.log('error', e)
	}
})

module.exports = router