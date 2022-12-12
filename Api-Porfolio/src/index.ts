import express from "express";
import routers from "./routers/index";
import path from 'path'
import cors from "cors";

const app = express();
app.use(express.json());
const PORT = 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT"],
  })
);

app.use("/api", routers);

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
