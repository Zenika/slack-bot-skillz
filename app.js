const http = require("http");
const { App } = require("@slack/bolt");
const { commandsHandler } = require("./src/commands");
const { homePage } = require("./src/home");
const { getUserID } = require("./src/lib/getSlackInformations");
const { getRequest } = require("./src/lib/getRequest");
const { sendWelcomeMessage } = require("./src/sendMessagesToSkillsUsers");
//const { reminderNoteSkillz } = require("./src/reminderNoteSkillz");
const { actionsHandler } = require("./src/actions");
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: ["/", "/slack/events"],
});
module.exports = app;

const port = process.env.PORT || 8000;

(async () => {
  await app.start(port);
  console.log("Server started");
  //getUserID("mai-ly.lehoux@zenika.com", app, app.signingSecret);
  //getRequest("http://localhost:8080/api/rest/get-all-users");
  //reminderNoteSkillz();
  //sendWelcomeMessage(app, app.token);
  homePage(app);
  actionsHandler(app);
  commandsHandler(app);
  debugger;
})();
