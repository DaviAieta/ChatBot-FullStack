import express from "express";
import { ChatController } from "../controllers/chat.controller";

const router = express.Router();

router.get("/", ChatController.getChat);
router.post("/", ChatController.postChat);

export default router;
