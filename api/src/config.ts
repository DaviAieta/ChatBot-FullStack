import express from "express";
import bodyParser from "body-parser";

const configApp = (app: any) => {
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
};

export default configApp;
