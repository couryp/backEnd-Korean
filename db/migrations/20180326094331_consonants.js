
exports.up = function(knex, Promise) {
  return knex.schema.createTable('consonants', (t) => {
    t.increments()
    t.string('symbol').notNullable().defaultTo('')
    t.string('pronounciation').notNullable().defaultTo('')
    t.string('name').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('consonants')
};
