const {
  getBotNotifications,
} = require("../../lib/requestsHasura/getBotNotifications");
const {
  setBotNotifications,
} = require("../../lib/requestsHasura/setBotNotifications");
const { getUserEmail } = require("../../lib/bolt/getSlackInformations");
const { postTwoLinesMessage } = require("../../messages/postMessages");
const { switchCommands } = require("../../lib/utils/switchCommands");

module.exports = {
  commandActivate(app) {
    app.command(
      switchCommands("/activate"),
      async ({ ack, payload, context, body }) => {
        await ack();
        const user = body["user_id"];
        try {
          const userEmail = await getUserEmail(user, app, app.token);
          const responseCommand = await getBotNotifications(userEmail);
          if (
            responseCommand.User &&
            responseCommand.User[0].botNotifications === true
          ) {
            await postTwoLinesMessage(
              payload.channel_id,
              "*Command failed* :sweat:",
              ":bulb: *The Skillz reminder is already activate. To desactivate it try * : /skillz-desactivate",
              app,
              context.botToken,
              "Response from /skillz-activate command"
            );
          } else {
            await setBotNotifications(userEmail, true);
            await postTwoLinesMessage(
              payload.channel_id,
              ":hugging_face: *You've activated my monthly reminders* :hugging_face:",
              ":bulb: Get a monthly reminder about your skills that have not been updated for more than 1 month. _You can display them right now by running_ /skillz-reminder-message :bulb:",
              app,
              context.botToken,
              "Response from /skillz-activate command"
            );
          }
        } catch (error) {
          console.error("error", error);
        }
      }
    );
  },
};
