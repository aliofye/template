import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the backend powered by Vite!');
});

export const api = app;
