import { Router } from "express";

export const MainRouter = Router();

MainRouter.get("/", (req, res) => {
    res.send("Hello World!");
});
