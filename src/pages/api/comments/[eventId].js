import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
  }

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
      client.close();
      return;
    }

    const newComments = {
      email,
      name,
      text,
      eventId,
    };

    try {
      const result = await insertDocument(client, "comments", newComments);

      newComments._id = result.insertedId;
      res
        .status(201)
        .json({ message: "Comment send successfuly!", comment: result });
    } catch (error) {
      res.status(500).json({ message: "Failed to insert comment!" });
    }
  }

  if (req.method === "GET") {
    try {
      const document = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: document });
    } catch (error) {
      res.status(500).json({ message: "Getting comment failed!" });
    }
  }
  client.close();
}

export default handler;
