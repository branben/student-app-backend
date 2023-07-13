// import app 
// start up and listen
// NO other job

require('dotenv').config();

// dot env will look at .env and add them 

const PORT = process.env.PORT || 9000;

const app = require('./app.js');

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
});
