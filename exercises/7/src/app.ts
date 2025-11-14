// import { largeModule } from "./largeModule";
// import { unusedModule } from "./unusedModule";

console.log("App started");

import("./largeModule").then((module) => {
  module.largeModule.doSomething();
});
