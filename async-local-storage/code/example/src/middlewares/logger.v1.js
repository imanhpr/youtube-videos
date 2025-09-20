import { randomUUID } from "crypto";
import { Router } from "express";
import pino from "pino";

const router = Router();
const logger = pino({ transport: { target: "pino-pretty" } });

router.use((req, res, next) => {
  const reqId = randomUUID();
  req.logger = logger.child({ reqId });
  next();
});

export default router;
