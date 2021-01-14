const express = require('express');
const User = require('./userModel');
const router = express.Router();

// GET ROUTE

router.get('/', (req, res) => {
	User.getAll()
		.then(user => res.status(200).json({mes: 'Grabbing Users', user}))
		.catch(err => res.status(500).json({mes:'Server Error', err.message}));
});

router.get('/:id', (req, res, next) => {
	const {id} = req.params;
	User.getById(id)
		.then(user => {
			req.user = user;
			res.status(200).json(user) ? next() : res.status(404).json({mes: 'No user with that id'})
		})
		.catch(err => res.status(500).json({mes: 'Validation Error', err.message}))
})

// POST ROUTE

router.post('/', (req, res) => {
	User.addUser(req.body)
		.then(user => res.status(200).json({mes: 'User Created', user}))
		.catch(err => res.status(500).json({mes: 'Server Error', err.message}))
})

// DELETE ROUTE

router.delete('/:id', (req, res) => {
	const {id} = req.params;
	User.deleteUser(id)
		.then(user => res.status(200).json({mes: 'User delete', user}))
		.catch(err => res.status(500).json({mes: 'Server Error', err.message}))
})

// UPDATE ROUTE

router.put('/:id', (req, res, next) => {
	const {id} = req.params;
	User.update(id, req.body)
		.then(user => res.status(200).json({mes:'User Update', user}))
		.catch(err => res.status(500).json({mes: 'Server Error', err.message}))

module.exports = router;