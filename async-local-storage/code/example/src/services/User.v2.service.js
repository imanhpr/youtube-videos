import { setTimeout } from "timers/promises";

class UserV2Service {
  createTodoItemForUser(userId, logger) {
    logger.info({ userId }, "try to find user by id");
    // finding user by userId

    return setTimeout(300, { username: "imanhpr", version: "v2" });
  }
}

const userV2Service = new UserV2Service();

export default userV2Service;
