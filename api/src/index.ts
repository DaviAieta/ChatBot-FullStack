import express, { Request, Response } from "express";
import configApp from "./config";
import chatRouter from "./routes/chat.router";

const app = express();
configApp(app);

app.use("/", chatRouter);

app.get("/", (req: Request, res: Response) => {
  res.redirect("/chat");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
