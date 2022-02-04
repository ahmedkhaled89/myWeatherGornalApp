// Setup empty JS object to act as endpoint for all routes
let projectData = {};
const port = 8000;

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

//body barser
//const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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
app.get('/', (req, res) => {
    res.send('hello')
})
//post request to add data to server end point
app.post('/addWeatherData', addWeatherData);

function addWeatherData(req, res){
    projectData = req.body;
    console.log("data added to project", projectData)
    console.log(req.body);
    res.send(projectData);
}

// GET Rout
app.get('/all', sendData);
function sendData(req, res){
    res.send(projectData);
}