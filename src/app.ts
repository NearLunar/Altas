import cookieParser from "cookie-parser";
import type { Express } from "express";
import express, {
    json as jsonParser,
    urlencoded as urlEncodedParser,
} from "express";
import helmet from "helmet";

import { MainRouter } from "@/routes";

const app: Express = express();

app.use(jsonParser()); // Parse JSON bodies
app.use(urlEncodedParser({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookie bodies
app.use(helmet()); // Add security headers

// Use Main Router
app.use("/", MainRouter);

export { app };
