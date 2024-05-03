import express from "express";
import path from "path";
import bodyParser from "body-parser";
import * as exphbs from "express-handlebars";

const configApp = (app: any) => {
  app.use(express.json());
  app.use("/public", express.static(path.join(__dirname, "../src/public")));
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));

  const handlebars = exphbs.create({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  });

  app.engine("handlebars", handlebars.engine);
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "/views"));
};

export default configApp;
