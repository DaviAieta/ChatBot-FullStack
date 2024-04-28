import express from "express";
import { ChatController } from "../controllers/chat.controller";

const router = express.Router();

router.get("/", ChatController.postChat);

export default router;
