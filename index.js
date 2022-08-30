import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js"
import router from "./routes/index.js";
/*import Users from "./models/UserModel.js";*/  //running this line for initialitation alongside Users.sync at line 14
dotenv.config();
const app = express();

try{
    await db.authenticate();
    console.log('Database Connected'); //this is mean that the config you set are running
    /*await Users.sync();*/ //this is the initialitation for database that doesnt have a table
} catch(error){
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000'})) //this is for connection to the frontend service
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000')); //we can customize the port for backend service, just make sure that it not overlaping with other service