const db = require("../data/db-config");

function find(user_id) {
  return db("posts as p").join("users as u", "u.id", "p.user_id") // inner join users AS u ON u.id = p.user_id
  .where({user_id: user_id}) //where user_id = id
  .select("p.id", "p.contents", "u.username"); // select p.id, p.contents, u.username


}

module.exports = {
  find,
}