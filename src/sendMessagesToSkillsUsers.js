const { getRequest } = require("./lib/getRequest");
const { getChannelID, getUserID } = require("./lib/getSlackInformations");
const { postMessage } = require("./lib/postMessages");
const { scheduledMessage } = require("./lib/scheduledMessage");

async function sendWelcomeMessage(app, slackBotToken) {
/*   const response = await getRequest(
    "https://staging.hasura.skillz.zenika.com/api/rest/get-user-infos-agency-topics"
  ); */
  let userID;
  let channelID;

/*   for (let i = 0; i < response.User.length; i++) {
    //if for testing
    if (response.User[i].email === "mai-ly.lehoux@zenika.com") {
    if (
      (userID = await getUserID(response.User[i].email, app, slackBotToken)) ===
      ""
    )
      continue;
    if ((channelID = await getChannelID(userID, app, slackBotToken)) === "")
      continue;    
    postMessage(
      channelID,
      "Ceci est un message pour tous les inscrits de Skillz !",
      app,
      slackBotToken
    );
    }
    //scheduledMessage(channelID, "ScheduledMessage", app)
  } */
}

module.exports.sendWelcomeMessage = sendWelcomeMessage;
