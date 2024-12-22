import express from 'express';

const app = express();

app.get('/message', (req, res) => {
  res.send({
    message: 'Hello, world!',
  });
});

export const server = app;
