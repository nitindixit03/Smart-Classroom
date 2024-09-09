import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  user: "neil",
  password: "kennys",
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

export default client;
