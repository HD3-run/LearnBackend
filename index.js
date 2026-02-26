//main server entry point 
//initialize express for routing 
//we do "npm i express" then , import and follows

//import express
import express from "express" ;

//import dotenv
import dotenv from "dotenv" ; 
dotenv.config(); //import config from dotenvpkg
//declare env variables 
const PORT = process.env.PORT || 6969 ;
const NODE_ENV = process.env.NODE_ENV || 'development';

//init express
const app = express() ;

//app.get for / route
app.get ('/' , (req , res) => {

	res.send(`server running on ${PORT}`);

});

//make server listen to port 
app.listen(PORT ,() => {
console.log(`server running on ${PORT}`);
});
