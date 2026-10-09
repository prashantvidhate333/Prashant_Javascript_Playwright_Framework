import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import env from "../config/env.config";
const test = base.extend({
  loginPageFix: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  loginPageFixture: async ({ page, loginPageFix }, use) => {
    await loginPageFix.loginIntoApp(env.users.standard, env.password);
    await use(loginPageFix);
  },
});
export { test, expect };
