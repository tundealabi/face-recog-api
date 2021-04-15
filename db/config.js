const config = require("config");

let configObject = {};

if(process.env.NODE_ENV === "production"){
    configObject = {
        client: 'pg',
        connection: {
          connectionString: config.get('User.dbConfigHeroku.connectionString'),
          ssl: {
            rejectUnauthorized: false
          }
        }
    }
}else{
    configObject = {
        client: "pg",
        version: "10.14",
        debug: true,
        connection:{
            user: config.get('User.dbConfigLocal.user'),
            password: config.get('User.dbConfigLocal.password'),
            host: config.get('User.dbConfigLocal.host'),
            database: config.get('User.dbConfigLocal.database'),
            port: config.get('User.dbConfigLocal.port')
        }
    };
}


module.exports = configObject;