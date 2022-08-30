import { Sequelize } from "sequelize";
//To make connection to MySql
const db = new Sequelize('auth_db', 'root','',{ //make sure the config are match with your setup on server/dbms
    host:"localhost", //i got the connection error when try it with http://  original: Error: getaddrinfo ENOTFOUND http://localhost
    dialect:"mysql" 
});

export default db;