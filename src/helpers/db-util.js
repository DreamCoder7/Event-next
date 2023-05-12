import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const uri = process.env.DB_HOST;
  const client = new MongoClient(uri);

  return client;
}

export async function insertDocument(client, collectionName, document) {
  const dbName = "events";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const result = await collection.insertOne(document);
  return result;
}

export async function getAllDocuments(client, collectionName, sort) {
  const db = client.db("events");

  const document = await db
    .collection(collectionName)
    .find()
    .sort(sort)
    .toArray();

  return document;
}
