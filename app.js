const { App, ExpressReceiver, LogLevel } = require("@slack/bolt");
const { homePage } = require("./src/home");
const { commandsHandler } = require("./src/commands");
const { getUserID } = require("./src/lib/getSlackInformations");
const { getRequest } = require("./src/lib/getRequest");
const { sendWelcomeMessage } = require("./src/sendMessagesToSkillsUsers");
const { reminderNoteSkillz } = require("./src/reminderNoteSkillz");
const { actionsHandler } = require("./src/actions");

// Create a Bolt Receiver
const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: LogLevel.INFO,
});

// Create the Bolt App, using the receiver
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  logLevel: LogLevel.INFO,
  receiver,
});

// Slack interactions are methods on app
app.event("message", async ({ event, client }) => {
  // Do some slack-specific stuff here
  await client.chat.postMessage("test");
});

// this is how to create custom routes
// receiver.router.post("/secret-page", (req, res) => {
//   // You're working with an express req and res now.
//   res.send("yay!");
// });

(async () => {
  homePage(app);
  actionsHandler(app);
  commandsHandler(app);
  await app.start({ port: process.env.PORT });
  console.log("⚡️ Skillz-Bot started");
})();
