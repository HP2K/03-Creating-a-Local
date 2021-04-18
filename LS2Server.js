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
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

// GET route
const data = []
app.post('/addMovie', addMovie);

function addMovie (request, response) {
  data.push(require.body)
  console.log(data);
}