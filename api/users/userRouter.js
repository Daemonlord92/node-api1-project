const express = require('express');
const User = require('./userModel');
const router = express.Router();

// GET ROUTE

router.get('/', (req, res) => {
	User.getAll()
		.then(user => res.status(200).json({mes: 'Grabbing Users', user}))
		.catch(err => res.status(500).json({mes:'Server Error', err}))
})

router.get('/:id', (req, res) => {
	const {id} = req.params
	User.getById(id)
		.then(user => {
			res.status(200).json(user)
		})
		.catch(err => res.status(500).json({mes: 'Validation Error', err}))
})

// POST ROUTE

router.post('/', (req, res) => {
	User.addUser(req.body)
		.then(user => res.status(200).json({mes: 'User Created', user}))
		.catch(err => res.status(500).json({mes: 'Server Error', err}))
})

// DELETE ROUTE

router.delete('/:id', (req, res) => {
	const {id} = req.params
	User.deleteUser(id)
		.then(user => res.status(200).json({mes: 'User delete', user}))
		.catch(err => res.status(500).json({mes: 'Server Error', err}))
})

// UPDATE ROUTE

router.put('/:id', (req, res) => {
	const {id} = req.params;
	User.update(id, req.body)
		.then(user => res.status(200).json({mes:'User Update', user}))
		.catch(err => res.status(500).json({mes: 'Server Error', err}))
})
module.exports = router;