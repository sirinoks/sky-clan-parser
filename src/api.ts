import express from "express";
import parsed from "./parser";

console.log(parsed);

const app = express();
const port = 3643;

app.get("/data", (req, res) => {
  res.json(parsed);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
