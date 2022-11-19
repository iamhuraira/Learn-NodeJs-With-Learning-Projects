const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


/* app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello From the Server Side',
        app: 'Natours'
    }); 
})
app.post('/', (req, res) => {
    res.send("You can post to this end point");
}) */

app.use(express.json());


/* 
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getTour);
app.post('/api/v1/tours', createTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);
 */




app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
const port = 3000;

app.listen(port, () => {
  console.log(`App Running OnPort ${port}.....`);
});
