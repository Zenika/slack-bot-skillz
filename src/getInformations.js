const { postMessage } = require("./postMessages")

async function getChannelID(userID, app) {
        try {
          const result = await app.client.conversations.open({
            token: process.env.SLACK_BOT_TOKEN,
            users: userID
          });
          if (result.ok === true) {
            return result.channel.id
          }
        } catch(e) {
          console.log(e)
        }
        return "";
    };
async function getUserID(email, app) {
        try {
        const result = await app.client.users.lookupByEmail({
          token: process.env.SLACK_BOT_TOKEN,
          email: email
        });
        const channelID = await getChannelID(result.user.id, app)
        postMessage(channelID, app)
        return result.user
        
      } catch (e) {
          console.log(e)
        }
    };

module.exports.getChannelID = getChannelID;
module.exports.getUserID = getUserID;