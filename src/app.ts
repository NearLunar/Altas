import type { Express } from "express";
import express from "express";

const app: Express = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export { app };
