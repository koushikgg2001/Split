const { Client } = require('pg');
// require('dotenv').config();

const client = new Client({
    user: 'postgres',
    host: 'localhost', // Change to your host if necessary
    database: 'split',
    password: 'root',
    port: 5432,
});

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      age INT
    );
  `;

  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
    await client.query(query);
    console.log('Table created successfully');
  } catch (err) {
    console.error('Error creating table:', err.stack);
  } finally {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
  }
};

createTable();