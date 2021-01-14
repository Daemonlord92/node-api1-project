const db = require('../../data/dbConfig')

module.exports = {
	getAll,
	getById,
	addUser,
	updateUser,
	deleteUser
}

function getAll() {
		return db('users');
	};

	function getById(id) {
		return db('users').where(id);
	};

	function addUser(user) {
		return db('users').insert(user).then(ids=>{
			return getById(ids[0]);
		});
	};

	function updateUser(id, changes) {
		return db('users').where({id}).update(changes);
	};

	function deleteUser(id) {
		return db('id', id).del();
	};