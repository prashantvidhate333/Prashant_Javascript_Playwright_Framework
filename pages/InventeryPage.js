import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventeryPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.pageText = page.locator("//div[contains(text(), 'Swag')]");
    this.itemCount = page.getByRole("button", { name: "Add to cart" });
  }
  async verifyProductCount(expCount) {
    const actualCount = await this.itemCount.count();
    await expect(actualCount).toBe(expCount);
  }
}
