import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.MONGO_DB_URI?.trim();
const authDbName = process.env.AUTH_DB_NAME?.trim().replace(/^['"]|['"]$/g, "");

const client = new MongoClient(mongoUri);
const db = client.db(authDbName);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "job_seeker",
      },
    },
  },
});
