import { MongoClient } from "mongodb";

async function newsLetterHandler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address!" });
      return;
    }

    const uri =
      "mongodb+srv://Abreham:rk17OXDQuvOEQHzn@next-events.0zlqk4s.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();
    console.log("Connection establish successfuly!");

    const dbName = "events";
    const collectionName = "newsletter";

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    collection.insertOne({ email: userEmail });

    console.log(userEmail);
    res.status(201).json({ message: "Signup successfuly!" });
  }
}

export default newsLetterHandler;
