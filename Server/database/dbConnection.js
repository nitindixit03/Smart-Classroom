const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "classroom"
});

async function connectClient() {
  try {
    await client.connect();
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    
  }
}

connectClient();

module.exports = client;
