const { getChannelID } = require("../../lib/bolt/getSlackInformations");
const { switchCommands } = require("../../lib/utils/switchCommands");
const { postSingleLineMessage } = require("../../messages/postMessages");
const { getBotUsers } = require("../../lib/requestsHasura/getBotUsers");

module.exports = {
  commandBotUsers(app) {
    app.command(
      switchCommands("/botUsers"),
      async ({ ack, payload, context, body }) => {
        await ack();
        try {
          const channelId = await getChannelID(body["user_id"], app, app.token);
          const botUsers = await getBotUsers();
          let botUsersList = "";

          for (let i = 0; i < botUsers.User.length; i++) {
            botUsersList =
              botUsersList +
              `:bulb: *${botUsers.User[i].name} has actived me*\nSee his or her Skillz profile there thanks to the link below \n :mag: https://skillz.zenika.com/profile/${botUsers.User[i].email}\n\n\n`;
          }
          await postSingleLineMessage(
            channelId,
            botUsersList,
            app,
            context.botToken,
            "Response from /skillz-version"
          );
          await postSingleLineMessage(
            channelId,
            `*In total, ${botUsers.User.length} people activated me*`,
            app,
            context.botToken,
            "Response from /skillz-version"
          );
        } catch (e) {
          console.error(e);
        }
      }
    );
  },
};
