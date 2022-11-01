const express = require('express')
const app = express();
const fs = require('fs')
const axios = require("axios");
const { getEnvironmentData } = require('worker_threads');


/* app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello From the Server Side',
        app: 'Natours'
    });
})
app.post('/', (req, res) => {
    res.send("You can post to this end point");
}) */

app.use(express.json())

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

/* app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'Success',
        results: tours.length,
        data: {
            tours
        }
    })
})
app.post('/api/v1/tours', (req, res) => {
    // console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({
        id: newId
    }, req.body)
    tours.push(newTour)

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    })
    // res.send("Done")
})*/
const port = 3000;

app.listen(port, () => {
    console.log(`App Running OnPort ${port}.....`)

}) 

 async function makerequest (){
    let result = await axios.get('http://127.0.0.1:3000/api/v1/tours');
    console.log(result.status)
}
let response = makerequest()
console.log(response)
