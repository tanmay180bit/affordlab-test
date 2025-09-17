const express = require("express");
const app = express();

app.use(express.json()); // allows JSON body parsing

// Some dummy list of users
let users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 }
];

// GET /
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

// POST /add
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ sum: a + b });
});

// 👉 GET /users (this is missing in your code)
app.get("/users", (req, res) => {
  res.json(users);
});

// 👉 PUT /users/:id (update a user)
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  Object.assign(user, req.body); // update with new values
  res.json({ message: "User updated successfully", user });
});

// 👉 DELETE /users/:id (delete a user)
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.json({ message: "User deleted successfully" });
});

// Start server
app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
// DELETE /users/:id - remove a user by id
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  // check if user exists
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // remove user from array
  users = users.filter(u => u.id !== userId);

  res.json({ message: "User deleted successfully" });
});