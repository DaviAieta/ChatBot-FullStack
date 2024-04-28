import express from "express";
import { ChatController } from "../controllers/chat.controller";

const router = express.Router();

router.post("/", ChatController.getChat);

export default router;
