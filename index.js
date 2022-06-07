import express from 'express';
import  bodyParser from 'body-parser';
import usersRoute from './routes/users.js'

const app = express();

const PORT = 5000;
app.use(bodyParser.json());
app.use('/users', usersRoute)
app.get('/', (req, res) => {
    console.log('homepage')
    res.send('Hello from homepage')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
