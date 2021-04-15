
// const {Client} = require("pg");
const config = require("./config");
// console.log(config)
const knex = require("knex")({...config});

// knex.select('email').from('accounts')
//     .then(out => {
//         console.log("Hie")
//         console.log(out)})

// const client = new Client(config);

// client.connect()
// create table 'users' with a primary key using 'increments()'
// knex.schema.createTable('accounts', function (table) {
//     console.log("accounts")
//     table.increments('user_id');
//     table.string('username',20).notNullable();
//     table.string('email',50).unique('email').notNullable();
//     table.integer('entries').notNullable().defaultTo(0);
//     table.timestamp('created_on', { useTz: true });
//   });
// knex.schema.createTable('login', function (table) {
//     console.log("login")
//     table.increments('user_id');
//     table.string('hash').notNullable();
//     table.string('email',50).unique('email').notNullable();
//   });
  
module.exports = knex;




// module.exports = client;