import express from "express";
import { ChatController } from "../controllers/chat.controller";

const router = express.Router();

router.post("/chat", ChatController.postChat);

export default router;
