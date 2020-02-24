const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoConnect = (callback) => {
    MongoClient.connetct('mongodb+srv://ramchat007:Feb@2020@cluster0-xrex5.mongodb.net/test?retryWrites=true&w=majority')
    .then(client => {console.log("connected"); callback(client);})
    .catch(err => {console.log(err);});
}
mongoConnect(callback);