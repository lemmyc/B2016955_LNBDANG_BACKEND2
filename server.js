const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.utils");




async function startServer(){
  try{
    await MongoDB.connect(config.db.uri);
    console.log("Connected to the Database");

    const PORT = config.app.port;
    
    app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}.`);

    });
  }
  catch (error){
    console.log("Cannot connect to the Database with error");
    console.log(error);
    process.exit();
  }
}

startServer();