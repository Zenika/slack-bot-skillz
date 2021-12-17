const { App } = require("@slack/bolt");
require("dotenv").config();
const { commandsHandler } = require("./src/commands");
const { homePage } = require("./src/home");
const { getUserID } = require("./src/lib/getSlackInformations");
const { getRequest } = require("./src/lib/getRequest");
const { sendWelcomeMessage } = require("./src/sendMessagesToSkillsUsers");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});
module.exports = app;

(async () => {
  await app.start(process.env.PORT || 4000);
  //getUserID("mai-ly.lehoux@zenika.com", app, app.signingSecret);
  //getRequest("http://localhost:8080/api/rest/get-all-users");
  sendWelcomeMessage(app, app.token);
  homePage(app);
  commandsHandler(app);
  debugger;
})();
