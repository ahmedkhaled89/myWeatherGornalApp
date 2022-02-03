// Setup empty JS object to act as endpoint for all routes
let projectData = {};
const port = 8000;

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
/* Dependencies */
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const server = app.listen(port, listening);

function listening(){
    console.log(`WJA Running On Port ${port}`)
}

//post request to add data to server end point
app.post('/add', addWeatherData);
function addWeatherData(req, res){
    projectData = req.body;
    console.log("received data from clint side",projectData);

}