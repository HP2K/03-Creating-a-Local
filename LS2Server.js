projectData = {};

// Express to run the server and routes
const express = require ('express');

// Start up instace of app
const app = express ();


/* Dependencies */
const bodyParser = require ('body-parser');
/* Middleware */
// Here we ate configuring express to use bodyParser as middleware //
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Cors for cross origion allowance
const cors = require('cors');
app.use(cors());

//inniziate the main project folder//
app.use(express.static('website'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);
// const server = app.listen(port, ()=>(console.log(`running on localhost: ${port}`)})
// Callback to debug
function listening() {
    console.log(`running on localhost: ${port}`);
}

/// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// POST route
app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}

// POST an animal
const data = [];

app.post('/animal', addAnimal);

function addAnimal (req,res){
    data.push(req.body);
};