const exp = require('constants');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://rbarnett2018:<Munmun08!!!!>@ronaldcluster.ncai2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MangoClient(uri);
async function main() {
	
}

app.use(express.static('/public'));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/html/homepage.html');
    app.use('/public/css/homepage.css', express.static(__dirname + '/public/css/homepage.css'))
});

app.get('/profiles/new', (req, res) => {
    res.sendFile(__dirname + '/public/html/create-form.html');
    app.use('/public/css/create-form.css', express.static(__dirname + '/public/css/create-form.css'));
});

app.post('/profiles/new', (req, res) => {
    
    app.use('/public/css/create-form.css', express.static(__dirname + '/public/css/create-form.css'));
});

















app.listen(3000, () => {
    console.log(`Listening on Port: 3000`);
});