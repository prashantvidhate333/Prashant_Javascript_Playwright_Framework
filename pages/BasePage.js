import { expect } from "@playwright/test";
import logger from "../utils/logger";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(url) {
    await this.page.goto(url);
  }

  async click(locator) {
    await locator.waitFor({ state: "visible" });
    await locator.click();
  }

  async enterText(locator, text) {
    await locator.waitFor({ state: "visible" });
    await locator.fill(text);
    logger.info(`Locator Name : ${locator}`);
    logger.info(`Locator Text : ${text}`);
  }

  async getText(locator) {
    await locator.waitFor({ state: "visible" });
    return locator.innerText();
  }

  async verifyVisibleText(locator, text) {
    await locator.waitFor({ state: "visible" });
    const visibleText = await this.getText(locator);
    await expect(visibleText).toBe(text);
  }
}
