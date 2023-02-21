const { MongoClient } = require('mongodb');
// import MongoClient from 'mongodb';
// let mongoURI =
// process.env.MONGODB_URI
// async function listDatabases(client) {
//   let databasesList = await client.db().admin().listCollections();

//   console.log('Databases:');
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

const insertToDb = async function (data) {
  // console.log('data in inserted to db::', data);
  const client = new MongoClient(process.env.MONGODB_URI);
  // console.log('New client created!');
  await client.connect();
  // console.log('New connection');
  const db = client.db('bank-details');
  const collection = db.collection('Loan-approval');
  // console.log('collection:');
  let inserted = collection.insertOne(data);
  // console.log('inserted:', inserted);
  return inserted;
};

// async function test(data) {
//   await inserttoDB({ info: 'data' });
// }

// test();
module.exports = {
  insertToDb,
};
//  function findall(){
//   let db = dbConn();
//   let bankDetailsCollection = db.Loan-approval.findAll();
//   db.findall
//  }
