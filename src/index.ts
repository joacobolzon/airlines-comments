import express from "express"; //ESModules
import diariesRoutes from "./routes/diaries"
const app = express();

app.use(express.json()); //middleware que transforma la req.body en json

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("Someone pinged");
  res.send("pong");
});

app.use("/api/diaries", diariesRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
