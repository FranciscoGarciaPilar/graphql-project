const { graphql } = require('graphql');
const readline = require('readline');
const mySchema = require('../schema/main');
const { MongoClient } = require('mongodb');
const assert = require('assert');

// The readline interface code
const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MONGO_URL = 'mongodb://localhost:27017';

MongoClient.connect(MONGO_URL, (err, client) => {
    assert.equal(null, err);
    console.log('Connected to MongoDB server');
    const db = client.db('test');
    rli.question('Client Request: ', inputQuery => {
        graphql(mySchema, inputQuery, { }, { db }).then(result => {
            console.log('Server answer :', result.data);
            client.close(() => rli.close());
        });
    });
});
