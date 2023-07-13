// define route handlers 
// functions that take req/res, tells express what to do with methods and paths
const express = require("express");
const cors = require("cors")
const studentData = require('./studentData.json');
// create an instance of an express application
const app = express();

//setup middleware
 // functions that will work with req, res before the final route handler function
app.use(cors())

//Define our routes
// healthcheck route
// GET / method = GET path = /

app.get('/',(req, res) => {
    //handler goes here
    res.status(200).json({ data: "Service is running"})
})

// GET /students
// define  path = method and handler
// catch errors

app.get('/students', (req, res) => {
    try {
const { students } = studentData;
res.status(200).json({data: students})
    } catch (err) {
        res.status(500).json({ error: err.message})
    };
});


// GET /students/11
app.get('/students/:id', (req, res) => {
    try {
    const { id } = req.params;
    // request.params; // { id: '11'}
    const { students } = studentData;
    

    const student = students.find((student) => student.id === id );
    if (student) {
        res.status(200).json({data: student})
    } else {
res.status(400).json({error: `No student found with id of ${id} ` })
    }
} catch (err) {
    res.status(500).json({ error: err.message})
}
});




module.exports = app;