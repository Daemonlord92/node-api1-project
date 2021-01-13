const db = require('../../data/dbConfig')

module.exports = {

	async function getAll() {
		return await db('users');
	};

	async function getById(id) {
		return await db('users').where(id);
	};

	async function addUser(user) {
		return db('users').insert(user).then(ids=>{
			return getById(ids[0]);
		});
	};

	async function updateUser(id, changes) {
		return db('users').where({id}).update(changes);
	};

	async function deleteUser(id) {
		return db('id', id).del();
	};
}