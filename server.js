const  db  = require('./dataBase');
const  app  = require('./app')

const startServer = async () => {
    try {
        await db;
        console.log('La conexión a la base de datos ha sido establecida correctamente.');
      } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
      }
      app.listen(1234,()=>{
        console.log("servidor puerto 1234")
    })
  };
  
  startServer();