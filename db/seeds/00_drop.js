
exports.seed = function(knex, Promise) {
  return knex('users').del()
    // .then(() => knex('users').del())
}
