require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),

});
console.log("dfghjnjhbkw chbjew",process.env.L_USERNAME)
module.exports = {
  "development": {
    "username": process.env.L_USERNAME,
    "password": process.env.L_PASSWORD,
    "database": process.env.L_DATABASE,
    "host": process.env.L_HOST,
    "dialect": process.env.L_DIALECT
  },

  "test":{
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production":{
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
    
  }
}
