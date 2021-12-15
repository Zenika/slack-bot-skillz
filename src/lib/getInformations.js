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
    console.log(e);
  }
  return "";
}
async function getUserID(email, app) {
  try {
    const result = await app.client.users.lookupByEmail({
      token: process.env.SLACK_BOT_TOKEN,
      email: email,
    });
    await getChannelID(result.user.id, process.env.SLACK_BOT_TOKEN);
    return result.user;
  } catch (e) {
    console.log(e);
  }
  return "";
}

module.exports.getChannelID = getChannelID;
module.exports.getUserID = getUserID;
