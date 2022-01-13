const {
  getBotNotifications,
} = require("../../lib/requestsHasura/getBotNotifications");
const {
  setBotNotifications,
} = require("../../lib/requestsHasura/setBotNotifications");
const { getUserEmail } = require("../../lib/bolt/getSlackInformations");
const { postTwoLinesMessage } = require("../../messages/postMessages");

module.exports = {
  commandDesactivate(app) {
    app.command("/desactivate", async ({ ack, payload, context, body }) => {
      await ack();
      const user = body["user_id"];
      try {
        const userEmail = await getUserEmail(user, app, app.token);
        const responseCommand = await getBotNotifications(userEmail);
        if (
          responseCommand.User &&
          responseCommand.User[0].botNotifications === false
        ) {
          await postTwoLinesMessage(
            payload.channel_id,
            "*Command failed* :sweat:",
            ":bulb: *The Skillz reminder is already desactivate. To activate it try * : _/activate_",
            app,
            context.botToken,
            "Response from /desactivate command"
          );
        } else {
          await setBotNotifications(userEmail, false);
          await postTwoLinesMessage(
            payload.channel_id,
            ":hugging_face: *You've desactivated my monthly reminders* :hugging_face:",
            ":bulb: Get a monthly reminder about your skills that have not been updated for more than 1 month. _You can display them right now by running /oldSkills_ :bulb:",
            app,
            context.botToken,
            "Response from /desactivate command"
          );
        }
      } catch (error) {
        console.error("error", error);
      }
    });
  },
};
