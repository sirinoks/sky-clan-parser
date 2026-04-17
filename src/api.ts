import express from "express";
import parsed, { parseLogs } from "./parser";

console.log(parsed);

const app = express();
app.use(express.json());
const port = 3643;

app.get("/data", (req, res) => {
  res.json(parsed);
});

app.post("/parse", (req, res) => {
  const { logs } = req.body;

  if (typeof logs !== "string") {
    res.status(400).json({
      error: 'Request body must contain a string field called "logs"',
    });
    return;
  }

  try {
    const fights = parseLogs(logs);
    res.json(fights);
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : "Unknown parsing error",
    });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
