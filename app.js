//const { request, response } = require('express');
//not needed
const express = require('express');
const cors = require('cors');
//need to use cors
//const res = require('express/lib/response');
const app = express()
//const port = 4002
const dataFile = require('./data')
//const models = require('./model');
app.use(express.json())
app.use(cors());
//need to use cors

// app.use('/', (req, res) => {
//   res.render('index')
// })

app.get('/find-yours', (request, response) => {
    response.send(JSON.stringify(dataFile.colours))
    //you don't need to stringify this, but if a json file ever has nested attributes (like more than one level) then you need to stringify it otherwise it won't work
    //more for reference, basically easy life is stringify everything you send from the server
})

app.get('/something-new', (request, response) => {
    const colour = dataFile.colours[Math.floor(Math.random() * dataFile.colours.length)]
    //originally was Math.round. it's math.floor otherwise you get out of bounds errors
    //no need for {} around variables
    response.send(JSON.stringify(colour));
    //originally said 'return response.json'. it's response.send
    
    })

    app.get('/something-new/:id', (request, response) => {
        const newColour = parseInt(request.params.id)
        let selectedColour = dataFile.colours.find(colours => colours.id === newColour)
        if (selectedColour === undefined) {
            response.status(404)
            response.send(JSON.stringify({ message: 'No colour found'}));
          } else {
          response.send(JSON.stringify(selectedColour));
        }
    })

module.exports = {
    app
}
