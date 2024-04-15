import { defineRule } from "vee-validate";
import * as AllRules from "@vee-validate/rules";

export default defineNuxtPlugin(() => {
  Object.keys(AllRules)
    .filter((k) => k !== "default")
    .forEach((rule) => {
      // @ts-ignore
      defineRule(rule, AllRules[rule]);
    });
});
