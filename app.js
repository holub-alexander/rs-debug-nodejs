const bodyParser = require('body-parser');
const express = require('express');
const userRouter = require('./controllers/usercontroller');
const gameRouter = require('./controllers/gamecontroller');
const { PORT } = require('./common/config');
const db = require('./db');

const app = express();

db.sync();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    console.log(req.body);
    res.send('Service is running!');
    return;
  }

  next();
});

app.use('/api/auth', userRouter);

// app.use(require('./middleware/validate-session'));

app.use('/api/game', gameRouter);

app.listen(PORT, () => {
  console.log('App is listening on 4000');
});
