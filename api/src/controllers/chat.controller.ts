import { Request, Response } from "express";
import { Genai } from "../helper/gemini";

export class ChatController {
  static async postChat(req: Request, res: Response) {
    try {
      const message = req.body.message.toLowerCase();
      const language = req.body.language.toLowerCase();
      let response = "";

      if (message.trim() !== "") {
        response = await Genai.run(message, language);
      } else {
        response = "Try type anything.";
        return res.status(400).json({
          sucess: false,
          data: response,
        });
      }
      return res.status(200).json({
        sucess: true,
        data: response,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error,
      });
    }
  }
}
