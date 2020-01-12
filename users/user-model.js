const db = require("../data/db-config");

function find() {
   return db("users").select();
}

function findById(id) {
    return db('users')
             .where({id})
             .first()
}

function add() {

}

function update() {

}

function remove() {

}



module.exports = {
  find,
  findById,
  add,
  update,
  remove
}