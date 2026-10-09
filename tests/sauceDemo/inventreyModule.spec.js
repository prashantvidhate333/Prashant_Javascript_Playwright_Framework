import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { BasePage } from "../../pages/BasePage";
import { InventeryPage } from "../../pages/InventeryPage";
import env from "../../config/env.config";
import { TITLES } from "../../utils/constants";

test.describe("Inventory Module", () => {
  test("TC-001 Exactly 6 products are displayed", async ({ page }) => {
    const loginPageObj = new LoginPage(page);
    const basePageObj = new BasePage(page);
    const inventeryPageObj = new InventeryPage(page);
    await loginPageObj.loginIntoApp(env.users.standard, env.password);
    await page.waitForTimeout(2000);
    await basePageObj.verifyVisibleText(
      inventeryPageObj.pageText,
      TITLES.SWAGlABS,
    );
    await inventeryPageObj.verifyProductCount(6);
    console.log("Added Code in gitHub");
  });
});
