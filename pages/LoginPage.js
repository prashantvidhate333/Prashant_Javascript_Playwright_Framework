import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async loginIntoApp(username, password) {
    await this.open("/");
    await this.enterText(this.usernameInput, username);
    await this.enterText(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}
