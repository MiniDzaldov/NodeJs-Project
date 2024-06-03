import { configDotenv } from 'dotenv';
configDotenv()
import  express  from 'express';
const app = express();

import locationRouter from './routers/LocationRouter.js';

// const hostname = process.env.HOST_NAME;
// const port = process.env.PORT;

const hostname = 'localhost';
const port = 3001;

app.use(express.json());

app.use('/api/locations', locationRouter);

app.use('/', (req, res) => {
    res.send('welcome to our api 123');
})

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
