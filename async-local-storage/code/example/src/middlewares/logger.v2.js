import { randomUUID } from "node:crypto";
import { Router } from "express";
import pino from "pino";
import loggerContext from "../context/logger.context.js";

const router = Router();
const logger = pino({ transport: { target: "pino-pretty" } });

router.use((_, __, next) => {
  const reqId = randomUUID();
  const child = logger.child({ reqId });
  loggerContext.run({ logger: child, reqId }, next);
});

router.use((_, res, next) => {
  const { logger } = loggerContext.getStore();
  res.once("finish", () => {
    logger.info(
      { status: res.statusCode },
      "Request has just finished successfully"
    );
  });
  next();
});

export default router;
