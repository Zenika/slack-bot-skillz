const { App, ExpressReceiver } = require("@slack/bolt");
const express = require("express");
const { commandsHandler } = require("./src/commands");
const { homePage } = require("./src/home");
const { getUserID } = require("./src/lib/getSlackInformations");
const { getRequest } = require("./src/lib/getRequest");
const { sendWelcomeMessage } = require("./src/sendMessagesToSkillsUsers");
//const { reminderNoteSkillz } = require("./src/reminderNoteSkillz");
const { actionsHandler } = require("./src/actions");

const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: {
    events: `/slack/events`,
  },
});
const boltApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver,
});
module.exports = boltApp;

const port = process.env.PORT || 8000;

(async () => {
  const app = express();
  app.use("/", (_, res) => res.end());
  app.use(receiver.router);
  //getUserID("mai-ly.lehoux@zenika.com", app, app.signingSecret);
  //getRequest("http://localhost:8080/api/rest/get-all-users");
  //reminderNoteSkillz();
  //sendWelcomeMessage(app, app.token);
  homePage(boltApp);
  actionsHandler(boltApp);
  commandsHandler(boltApp);
  debugger;
  app.listen(port, () => console.log("App started listening on port", port));
})();
