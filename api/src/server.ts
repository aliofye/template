import express from 'express';

const app = express();

app.get('/message', (req, res) => {
  res.send({
    message: 'Hello, world!',
  });
});

if (import.meta.env.PROD) {
  const PORT = import.meta.env.PUBLIC_API_PORT;
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

export const server = app;
