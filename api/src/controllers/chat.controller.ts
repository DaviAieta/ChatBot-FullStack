import { Request, Response } from "express";

export class ChatController {
  static async postChat(req: Request, res: Response) {
    try {
      const message = req.body();
      let response = "";

      if (message.includes("ola")) {
        response = "Ola, como posso ajudar?";
      } else {
        response = "Nao entendi sua mensagem";
      }

      return res.json({ message: response });
    } catch (error) {
      return res.status(400).send("Error: " + error);
    }
  }
}
