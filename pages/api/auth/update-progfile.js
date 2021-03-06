"use strict";

import bcrypt from "bcrypt";
import { MongoClient, ObjectId } from "mongodb";

const saltRounds = 12;
const dbName = "nextjs-local-authentication";
const colName = "users";
const reservedId = "5e213bba0b4d41f76457723a";

export default async (req, res) => {
  let { userId, updates } = req.body;

  // Prevent demo account from being changed
  if (userId === reservedId) {
    res
      .status(403)
      .json({ message: "Changes to the demo account are prohibited" });
  } else {
    // Connect to database
    const client = new MongoClient(process.env.DB, {
      useUnifiedTopology: true
    });
    try {
      await client.connect();
      const col = client.db(dbName).collection(colName);

      // Check for username conflict
      let usernameConflict = false;
      if (updates.username) {
        usernameConflict = await col.findOne({
          username: { $regex: "^" + updates.username + "$", $options: "i" }
        });
      }
      if (usernameConflict) {
        res.status(409).json({ message: "Username already taken" });
      } else {
        // Hash password if updating
        if (updates.password) {
          updates.password_hash = await bcrypt.hash(
            updates.password,
            saltRounds
          );
          delete updates.password;
        }

        // Update user in database
        const result = await col.updateOne(
          { _id: new ObjectId(userId) },
          { $set: updates }
        );

        if (result.modifiedCount === 1) {
          // Mission accomplished
          res.status(200).json({ message: "User update complete!" });
        } else {
          // Alert if no user found
          res.status(401).json({ message: "No user found" });
        }
      }
    } catch (err) {
      const { response } = err;
      response
        ? res.status(response.status).json({ message: response.statusText })
        : res.status(500).json({ message: err.message });
    }

    // Disconnect from database
    client.close();
  }
};