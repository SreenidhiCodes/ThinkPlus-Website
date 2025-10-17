import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import courseRoutes from "./routes/courses.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/courses", courseRoutes);
app.use("/api/contact", contactRoutes);


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(` Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.log(" DB Error:", err.message));
