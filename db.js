const mysql = require('mysql')
// Desestructurar las variables de entorno relacionadas con la conexión a MongoDB
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

var connection = mysql.createConnection(
    {
        host: MONGO_HOSTNAME, 
		user: MONGO_USERNAME,  
		password: MONGO_PASSWORD, 
		database: MONGO_DB,
    }
)
