//require or import packages - Like #include <stdio.h> in C
//const express = require("express");//uncomment to use require

// now we can do
//  import express from "express" too but
//  we need to add "type": "module" in package.json

//ES Modules (import) - Modern way
 import express from "express"; //uncomment this when using import 
//To use ES Modules (import), you need to do this:
// Open package.json
// Add this line at the top level:
//{
//"type": "module", <-- this line
//"name": "backnd-learn",
//"version": "0.0.1",
//}
  // ... rest of your package.json
//

import dotenv from "dotenv"; // importing dotenv pkg to handle env var


// Create an Express application instance
const app = express();
// Load environment variables from .env file
dotenv.config();
//const DECLARE your Variables , we use process.env.VARIABLENAME to access them from .env
const PORT = process.env.PORT || 3000; // we use || to add a fallback
const NODE_ENV = process.env.NODE_ENV || 'development';

// Set up a route - when someone visits the root URL '/'
app.get('/', (req, res) => {
  // req = request object (incoming data)
  // res = response object (what we send back)
  res.send(`<h1>server running on port ${PORT}</h1>`);
});
// Start the server on port 3000
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

//now we are gonna use dotenv package to handle 
//not exposing secrets and not hardcoding variables
//for that first we need to isntall dotenv . npm i dotenv
//then import it in our index.js at the top 
// then we need to pass the variables in .env like PORT , and NODE_ENV
// PORT will be our servers running or using port 
// NODE_ENV is used to define the environment 
// ... app setup

// Mount the routes
// This says: "Any request starting with /api/users should be handled by userRoutes"
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes); 

import fuckRoutes from "./routes/fuckRoutes.js";
app.use("/fuck", fuckRoutes);


app.listen(PORT, () => {
    console.log(`server environment ${NODE_ENV}`);
  console.log(`Server running on port ${PORT}`);
});
