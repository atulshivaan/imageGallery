import express from "express"
import { userUpload } from "../controllers/upload.controller.js";


const uploadRouter =express.Router();


uploadRouter.post("/upload",userUpload)


export default uploadRouter