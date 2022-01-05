const { postMessage } = require("./postMessages");

async function getChannelID(userID, app, slackbotToken) {
  try {
    const result = await app.client.conversations.open({
      token: slackbotToken,
      users: userID,
    });
    if (result.ok === true) {
      return result.channel.id;
    }
  } catch (e) {
    console.error("error", e);
  }
  return "";
}

async function getUserID(email, app, slackBotToken) {
  try {
    const result = await app.client.users.lookupByEmail({
      token: slackBotToken,
      email: email,
    });
    //await getChannelID(result.user.id, slackBotToken);
    if (result.ok === true) return result.user.id;
  } catch (e) {
    console.error("error", e);
  }
  return "";
}

module.exports.getChannelID = getChannelID;
module.exports.getUserID = getUserID;
