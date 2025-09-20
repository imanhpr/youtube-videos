import { setTimeout } from "node:timers/promises";
import loggerContext from "../context/logger.context.js";

class UserV3Service {
  #loggerCtx;

  constructor(loggerCtx) {
    this.#loggerCtx = loggerCtx;
  }
  createTodoItemForUser(userId) {
    const { logger, reqId } = this.#loggerCtx.getStore();
    logger.info({ reqId }, "this is reqId from context");
    logger.info({ userId }, "try to find user by id");
    // finding user by userId

    return setTimeout(300, { username: "imanhpr", version: "v2" });
  }
}

const userV3Service = new UserV3Service(loggerContext);

export default userV3Service;
