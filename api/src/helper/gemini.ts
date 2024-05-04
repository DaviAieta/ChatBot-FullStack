import { GoogleGenerativeAI } from "@google/generative-ai";
// const GOOGLE_API_KEY = proscess.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI("secret");

export class Genai {
  static async run(message: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = message;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return response;
  }
}
