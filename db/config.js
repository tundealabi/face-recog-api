const config = require("config");

let configObject = {
    client: 'pg',
    connection: {
		connectionString: "postgres://kheexhfsjotrrq:74299c55de2b551904a443a50868f811bd840f9575f893386f4367051cb28ed5@ec2-107-22-83-3.compute-1.amazonaws.com:5432/ddrqcl3pnasidc",
		ssl: true
	}
	
};

// if(process.env.NODE_ENV === "production"){
//     configObject = {
//         client: 'pg',
//         connection: config.get('User.dbConfigHeroku.connectionString')
//     }
// }else{
//     configObject = {
//         client: "pg",
//         version: "10.14",
//         debug: true,
//         connection:{
//             user: config.get('User.dbConfigLocal.user'),
//             password: config.get('User.dbConfigLocal.password'),
//             host: config.get('User.dbConfigLocal.host'),
//             database: config.get('User.dbConfigLocal.database'),
//             port: config.get('User.dbConfigLocal.port')
//         }
//     };
// }


module.exports = configObject;