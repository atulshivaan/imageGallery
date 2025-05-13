import express from "express"
import { getUpload, userUpload } from "../controllers/upload.controller.js";
import uploadMiddleware from "../middleware/multer.middleware.js";


const uploadRouter =express.Router();

uploadRouter.get("/get-image",getUpload)
uploadRouter.post("/upload",uploadMiddleware.single("photo"),userUpload)
uploadRouter.get("/uploads", (req, res) => {
  res.send("Upload route is working");
});


export default uploadRouter