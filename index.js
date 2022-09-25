import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello GraphQL');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log('GraphQL server running on port '+PORT);
});
