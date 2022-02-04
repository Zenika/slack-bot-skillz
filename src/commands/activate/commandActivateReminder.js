const {
  getBotNotifications,
} = require("../../lib/requestsHasura/getBotNotifications");
const {
  setBotNotifications,
} = require("../../lib/requestsHasura/setBotNotifications");
const { getUserEmail } = require("../../lib/bolt/getSlackInformations");

module.exports = {
  commandActivate(app) {
    app.command("/activate", async ({ ack, payload, context, body }) => {
      await ack();
      const user = body["user_id"];
      try {
        const userEmail = await getUserEmail(user, app, app.token);
        const responseCommand = await getBotNotifications(userEmail);
        if (
          responseCommand.User &&
          responseCommand.User[0].botNotifications === true
        ) {
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: payload.channel_id,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "*Command failed* :sweat:",
                },
              },
              {
                type: "divider",
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: ":bulb: *The Skillz reminder is already activate. To desactivate it try * : _/desactivate_",
                },
              },
            ],
            // Text in the notification
            text: "Reponse of /activate command",
          });
        } else {
          await setBotNotifications(userEmail, true);
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: payload.channel_id,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: ":hugging_face: *You've activated my monthly reminders* :hugging_face:",
                },
              },
              {
                type: "divider",
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: ":bulb: Get a monthly reminder about your skills that have not been updated for more than 1 month. _You can display them right now by running /skills_ :bulb:",
                },
              },
            ],
            // Text in the notification
            text: "Reponse of /activate command",
          });
        }
      } catch (error) {
        console.error("error", error);
      }
    });
  },
};
