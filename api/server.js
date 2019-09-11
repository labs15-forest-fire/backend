const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../models/users/users-router.js');
const locationsRouter = require('../models/locations/locations-router.js')
const notificationsRouter = require('../models/push-notifications/notifications-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/locations', locationsRouter);
server.use('/api/push',notificationsRouter);

server.get('/', (req, res) => {
  res.send("Welcome to the FireFlight Backend!");
});

module.exports = server;

