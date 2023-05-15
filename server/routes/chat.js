import express from "express";
import { getFeedChats, getUserChats } from "../controllers/chat.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();


router.get("/", verifyToken, getFeedChats);
router.get("/:userId/chats", verifyToken, getUserChats);


export default router;