import { app } from "@/app";
import { logger } from "@/utils/logger";

logger.info("Application started");

app.listen(3000, () => {
    logger.info("Server started on port 3000");
});
