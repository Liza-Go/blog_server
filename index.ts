import express from "express";
// import activityLogger from "./middlewares/activityLogger";
// import usersRoute from "./routes/usersRoute";
import postsRoute from "./routes/postRoute";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// app.use(activityLogger);
const port = process.env.PORT;

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
