import express from "express";
import configApp from "./config";
import chatRouter from "./routes/chat.router";

const app = express();
configApp(app);

app.use("/chat", chatRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
