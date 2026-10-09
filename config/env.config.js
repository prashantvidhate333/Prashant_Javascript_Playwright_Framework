import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.join(__filename);
const __dirname = path.dirname(__filename);

const ENV_NAME = process.env.ENV || "qa"; // default set to qa

function loadEnvFile() {
  const filepath = path.join(__dirname, "environments", `${ENV_NAME}.json`);
  if (fs.existsSync(filepath)) {
    return JSON.parse(fs.readFileSync(filepath, "utf-8"));
  }
  console.warn(
    `[env.config] No environment file for ${ENV_NAME}, using default`,
  );
  return {};
}

const fileConfig = loadEnvFile();
const fileCreds = fileConfig.credentials || {};
const fileUsers = fileCreds.users || {};

const env = {
  // which env is active
  name: fileConfig.name || ENV_NAME,

  // Application URL
  baseURL:
    process.env.BASE_URL || fileConfig.baseURL || "https://www.saucedemo.com/",

  // password
  password: process.env.PASSWORD || fileCreds.password || "secret_sauce",

  // users
  users: {
    standard: process.env.STANDARD || fileUsers.standard || "standard_user",
    locked: process.env.LOCKED || fileUsers.locked || "locked_out_user",
    problem: process.env.PROBLEM || fileUsers.problem || "problem_user",
    performance:
      process.env.PERFORMANCE ||
      fileUsers.performance ||
      "performance_glitch_user",
    error: process.env.ERROR || fileUsers.error || "error_user",
    visual: process.env.VISUAL || fileUsers.visual || "visual_user",
  },
  //   headless: process.env.HEADLESS !== "true", // headless
  headless: process.env.HEADLESS === "true", // headed mode

  logLevel: process.env.LOG_LEVEL || "info",
};

export default env;
