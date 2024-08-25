import express from "express";

const app = express();
app.use(express.json());
// Sample user information
const userInfo = {
  user_id: "j",
  email: "john@xyz.com",
  roll_number: "ABCD123",
};

// POST endpoint
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input" });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highestLowercaseAlphabet = alphabets
    .filter((char) => /^[a-z]$/.test(char))
    .sort()
    .slice(-1);

  res.json({
    is_success: true,
    ...userInfo,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
});
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});
