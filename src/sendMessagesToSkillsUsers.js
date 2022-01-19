const { request } = require("./lib/utils/request");
const { getChannelID, getUserID } = require("./lib/bolt/getSlackInformations");
const { postMessage } = require("./lib/bolt/postMessages");

async function sendMessagesToAllUsers(app, slackBotToken) {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/get-all-emails`
    , "GET"
  );
  let userID;
  let channelID;

  for (let i = 0; i < response.User.length; i++) {
    //if for testing
    if (response.User[i].email === "mai-ly.lehoux@zenika.com") {
      if (
        (userID = await getUserID(
          response.User[i].email,
          app,
          slackBotToken
        )) === ""
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
}

module.exports.sendMessagesToAllUsers = sendMessagesToAllUsers;
