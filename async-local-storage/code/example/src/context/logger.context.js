import { AsyncLocalStorage } from "node:async_hooks";

const loggerContext = new AsyncLocalStorage({ name: "loggerContext" });

export default loggerContext;
