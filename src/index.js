const { graphql } = require('graphql');
const readline = require('readline');
const mySchema = require('../schema/main');
const { MongoClient } = require('mongodb');
const graphqlHTTP =  require('express-graphql');
const express = require('express');
const assert = require('assert');

const app = express();

const MONGO_URL = 'mongodb://localhost:27017';

MongoClient.connect(MONGO_URL, (err, client) => {
    assert.equal(null, err);
    console.log('Connected to MongoDB server');
    const db = client.db('test');
    app.use('/graphql', graphqlHTTP({
        schema: mySchema,
        context: { db }
    }));

    app.listen(3000, () => console.log('Running Express.js on port 3000'));
});
