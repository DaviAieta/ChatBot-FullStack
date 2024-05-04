import { Request, Response } from "express";
import { Genai } from "../helper/gemini";

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
      let response = await Genai.run(message);
      console.log(response);

      return res.status(200).json({ reponse: response });
    } catch (error) {
      return res.status(400).json({ response: error });
    }
  }
}
