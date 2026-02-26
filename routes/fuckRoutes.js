import express from "express";
import {getFucked} from "../controllers/fuckController.js";

const router = express.Router();
// Define the route
// This matches GET requests to "/" (relative to where we mount it)
router.get("/", getFucked);

export default router;
