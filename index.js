import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ScriptGate AI server running");
});

app.post("/check", (req, res) => {
  const code = req.body.code;
  res.json({ result: "ok", received: code });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
