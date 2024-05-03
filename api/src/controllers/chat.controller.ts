import { Request, Response } from "express";

export class ChatController {
  static async getChat(req: Request, res: Response) {
    try {
      return res.render("chat");
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  static async postChat(req: Request, res: Response) {
    try {
      const message = req.body.message.toLowerCase();
      console.log(message);
      let response = "";

      if (message.includes("ola")) {
        response = "Ola, como posso ajudar?";
      } else {
        response = "Nao entendi sua mensagem";
      }

      return res.status(200).json({ message: response });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
