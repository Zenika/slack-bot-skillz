const { getRequest } = require("./lib/getRequest");
const { getChannelID, getUserID } = require("./lib/getSlackInformations");
const { postMessage } = require("./lib/postMessages");

async function sendWelcomeMessage(app, slackBotToken) {
  const response = await getRequest(
    "http://localhost:8080/api/rest/get-all-users"
  );
  let userID;
  let channelID;

  for (let i = 0; i < response.User.length; i++) {
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
}

module.exports.sendWelcomeMessage = sendWelcomeMessage;
