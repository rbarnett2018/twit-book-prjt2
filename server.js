const express = require('express');
const app = express();
const port = 3000;
const create = require('./controller/create-form');
app.use('/create', create);
const edit = require('./controller/update-form');
app.use('/edit', edit);
const deletE = require('./controller/delete-names');
app.use('/delete', deletE);
const view = require('./controller/view-names');
app.use('/view', view);
// const routes = require('./routes/routes');
// app.use('')
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://rbarnett2018:Munmun08!!!!@ronaldcluster.ncai2.mongodb.net/RonaldCluster?retryWrites=true&w=majority";
MongoClient.connect(connectionString, (err, client) => {
    const db = client.db('RonaldCluster');


    if (err) return console.error(err)
  console.log('Connected to Database')
  });
















app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});