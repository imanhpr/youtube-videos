import { AsyncLocalStorage } from "node:async_hooks";

const store = { username: "imanhpr" };

const asyncStore = new AsyncLocalStorage({ name: "asyncStore" });

asyncStore.run(store, () => {
  const store = asyncStore.getStore();
  console.log("inside:", store);
});

console.log("outside:", asyncStore.getStore());
