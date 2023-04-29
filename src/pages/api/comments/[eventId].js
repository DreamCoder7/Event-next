import { MongoClient } from "mongodb";

async function connectDatabase() {
  const uri =
    "mongodb+srv://Abreham:rk17OXDQuvOEQHzn@next-events.0zlqk4s.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  return client;
}

async function insertDocument(client, document) {
  const dbName = "events";
  const collectionName = "comments";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  collection.insertOne(document);
}

async function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name.trim() === "" ||
      !name ||
      !text ||
      !text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input!" });
      return;
    }

    const newComments = {
      email,
      name,
      text,
      eventId,
    };

    let client;

    try {
      client = await connectDatabase();
      console.log("connect successfuly!");
    } catch (error) {
      res.status(500).json({ message: "connecting to the Database failed!" });
      return;
    }

    try {
      insertDocument(client, document);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "connecting to the Database failed!" });
      return;
    }

    res
      .status(201)
      .json({ message: "Comment send successfuly!", comment: newComments });
  }

  if (req.method === "GET") {
    const client = await connectDatabase();
    const db = client.db("events");

    const document = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: document });
  }
}

export default handler;
