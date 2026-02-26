import express from "express";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

// Define the route
// This matches GET requests to "/" (relative to where we mount it)
router.get("/", getUsers);
// This matches GET requests to "/fucked" (relative to where we mount it)

export default router;