import cors from 'cors';
import express from 'express';
import * as test from './api/test';
const functions = require('firebase-functions');

const app = express();
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

/** API Endpoints * */

// Utils
app.get('/test', test.getTest);


exports.api = functions.https.onRequest(app);
