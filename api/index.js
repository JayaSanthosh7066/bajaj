import express from "express";

const app = express();
app.use(express.json());
app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  console.log(data);
  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input format",
    });
  }

  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = "";

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/[a-zA-Z]/.test(item)) {
      alphabets.push(item);
      if (item === item.toLowerCase() && item > highestLowercaseAlphabet) {
        highestLowercaseAlphabet = item;
      }
    }
  });

  res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
      ? [highestLowercaseAlphabet]
      : [],
  });
});

app.get("/bfhl", (req, res) => {
  res.json({
    operation_code: 1,
  });
});

app.listen(3001, () => {
  console.log(`Server is listening at port ${3001}`);
});
