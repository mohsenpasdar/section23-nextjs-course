import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        console.log('backend', data);

        const client = await MongoClient.connect(process.env.MONGO_URI);
        console.log(client);
        const db = client.db();
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
};

export default handler;