import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function newsLetterHandler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
  }

  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address!" });
      client.close();
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      res.status(201).json({ message: "Signup successfuly!" });
    } catch (error) {
      res.status(500).json({ message: "Failed to signup user!" });
    }
  }

  client.close();
}

export default newsLetterHandler;
