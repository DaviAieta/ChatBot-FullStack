import express from "express";
import { ChatController } from "../controllers/chat.controller";

const router = express.Router();

router.get("/chat", ChatController.getChat);
router.post("/chat", ChatController.postChat);

export default router;
