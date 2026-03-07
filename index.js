import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/chat', (req, res) => {
    res.send('welcome');
});

app.get('/', (req, res) => {
    res.send('Welcome home');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});