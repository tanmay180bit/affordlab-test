# Define a callback function
def greet(name):
    print(f"Hello, {name}!")

# Function that takes another function as a callback
def process_name(callback):
    name = input("Enter your name: ")
    callback(name)  # Call the callback function

# Call process_name and pass greet as the callback
process_name(greet)
app.use(express.json()); // allow JSON body

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ sum: a + b });
});
