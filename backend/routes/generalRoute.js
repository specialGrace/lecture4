import express from "express";
const router = express.Router();
import { contactAdmin } from "../controllers/generalController.js";

router.post("/contact", contactAdmin);

export default router;
