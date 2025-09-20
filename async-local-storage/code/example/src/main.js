import Express from "express";
import loggerV1Middleware from "./middlewares/logger.v1.js";
import loggerV2Middleware from "./middlewares/logger.v2.js";
import userV1Service from "./services/User.v1.service.js";
import userV2Service from "./services/User.v2.service.js";
import userV3Service from "./services/User.v3.service.js";
import loggerContext from "./context/logger.context.js";

const app = Express();

// app.use(loggerV1Middleware);
app.use(loggerV2Middleware);

app.get("/v1", async (req, res) => {
  req.logger.info("Try to do something with request");
  const result = await userV1Service.createTodoItemForUser(11, req);
  res.json(result);
});

app.get("/v2", async (req, res) => {
  req.logger.info("Try to do something with request");
  const result = await userV2Service.createTodoItemForUser(22, req.logger);
  res.json(result);
});

const a = app.get("/v3", async (req, res) => {
  const loggerCtx = loggerContext.getStore();
  loggerCtx.logger.info("Try to do something with request");
  const result = await userV3Service.createTodoItemForUser(33);
  res.json(result);
  //   res.send("hello");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
