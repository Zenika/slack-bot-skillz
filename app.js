const { App } = require("@slack/bolt");
require("dotenv").config();
const { commandsHandler } = require("./src/commands");
const { homePage } = require("./src/home")
const { getUserID } = require("./src/getInformations")

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});
module.exports = app;

(async () => {
  await app.start(process.env.PORT || 3000);
  getUserID("mai-ly.lehoux@zenika.com", app)
  homePage(app)
  commandsHandler(app)
  debugger;
})();