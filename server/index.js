import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.connection.js";
import cors from "cors"
import uploadRouter from "./routes/uploadRoute.js";
import morgan from "morgan";
dotenv.config();

const app = express();
const port = 3030;

//middleware
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use(morgan("dev"))

app.use("/api/v1",uploadRouter)

app.listen(port, (req, res) => {
  ConnectDB();
  console.log(`Server is running on ${port}`);
});
