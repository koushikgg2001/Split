const { Client } = require("pg");

// Database connection configuration
const client = new Client({
  user: "postgres",
  host: "localhost", // Change to your host if necessary
  database: "split",
  password: "root",
  port: 5432,
});

// Connect to the database
client
  .connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch((err) => console.error("Connection error", err.stack));

// Create a new user
const createUser = async (name, email, age) => {
  const query =
    "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *";
  const values = [name, email, age];
  try {
    const res = await client.query(query, values);
    console.log("User created:", res.rows[0]);
  } catch (err) {
    console.error("Error creating user:", err.stack);
  }
};

// Read users
const getUsers = async () => {
  const query = "SELECT * FROM users";
  try {
    const res = await client.query(query);
    console.log("Users:", res.rows);
  } catch (err) {
    console.error("Error reading users:", err.stack);
  }
};

// Update a user
const updateUser = async (id, name, email, age) => {
  const query =
    "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *";
  const values = [name, email, age, id];
  try {
    const res = await client.query(query, values);
    console.log("User updated:", res.rows[0]);
  } catch (err) {
    console.error("Error updating user:", err.stack);
  }
};

// Delete a user
const deleteUser = async (id) => {
  const query = "DELETE FROM users WHERE id = $1 RETURNING *";
  const values = [id];
  try {
    const res = await client.query(query, values);
    console.log("User deleted:", res.rows[0]);
  } catch (err) {
    console.error("Error deleting user:", err.stack);
  }
};

// Example usage
(async () => {
  try {
    await createUser("John Doe", "john.doe@example.com", 30);
    await getUsers();
    await updateUser(1, "Jane Doe", "jane.doe@example.com", 28);
    await deleteUser(1);
  } catch (err) {
    console.error("Error in example usage:", err.stack);
  } finally {
    client
      .end()
      .then(() => console.log("Disconnected from PostgreSQL database"))
      .catch((err) => console.error("Error disconnecting", err.stack));
  }
})();
