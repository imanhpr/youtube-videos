import { setTimeout } from "timers/promises";

class UserV1Service {
  createTodoItemForUser(userId, req) {
    req.logger.info({ userId }, "try to find user by id");
    // finding user by userId

    return setTimeout(300, { username: "imanhpr", version: "v1" });
  }
}

const userV1Service = new UserV1Service();

export default userV1Service;
