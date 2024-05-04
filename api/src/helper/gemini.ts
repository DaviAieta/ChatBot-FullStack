import { GoogleGenerativeAI } from "@google/generative-ai";
// const GOOGLE_API_KEY = proscess.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI("");

export class Genai {
  static async run(message: string, language: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const modelConfigured = await model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: `Voce somente ira responder perguntas somente em ${language}`,
            },
          ],
        },
        {
          role: "model",
          parts: [{ text: "entendido" }],
        },
      ],
    });

    const result = await modelConfigured.sendMessage(message);
    const response = await result.response.text();

    return response;
  }
}
