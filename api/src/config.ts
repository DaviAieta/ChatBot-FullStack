import express from "express";
import path from "path";
import chatRouter from "./routes/chat.router";

const configApp = (app: any) => {
  app.use(express.json());
  app.use("/public", express.static(path.join(__dirname, "../src/public")));

  app.use("/chat", chatRouter);
};

export default configApp;
