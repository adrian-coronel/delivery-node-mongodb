// Importar la biblioteca Mongoose
const mongoose = require('mongoose');

// Desestructurar las variables de entorno relacionadas con la conexión a MongoDB
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

// Configuración de opciones para la conexión a MongoDB
const options = {
  useNewUrlParser: true,                    // Indica a Mongoose que utilice el nuevo analizador de URL
  reconnectTries: Number.MAX_VALUE,         // Intenta reconectar de forma indefinida
  reconnectInterval: 500,                    // Intervalo entre intentos de reconexión (en milisegundos)
  connectTimeoutMS: 10000,                   // Tiempo máximo de espera para establecer una conexión (en milisegundos)
};

// Construcción de la URL de conexión a MongoDB
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

// Intento de conexión a la base de datos MongoDB utilizando Mongoose
mongoose.connect(url, options)
  .then(() => {
    console.log('MongoDB is connected');     // Mensaje de éxito cuando la conexión se realiza correctamente
  })
  .catch(err => {
    console.log(err);                        // Manejo de errores si la conexión falla
  });
