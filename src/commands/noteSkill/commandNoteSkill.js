const {
  changeCommandValueForView,
} = require("../../views/noteSkill/viewNoteSkill");
const {
  changeCommandValueForAction,
} = require("../../actions/noteSkill/actionNoteSkill");
const { postSingleLineMessage } = require("../../messages/postMessages");

module.exports = {
  commandNoteSkill(app) {
    app.command("/note", async ({ ack, payload, context, body }) => {
      await ack();
      const responseCommand = await changeCommandValueForView(body.text);
      await changeCommandValueForAction(body.text);

      try {
        if (responseCommand === "fail") {
          await postSingleLineMessage(
            payload.channel_id,
            ":sweat: Sorry, this skill does not exists. You can create one trough the Skillz app",
            app,
            context.botToken,
            "Response from /note"
          );
        } else {
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: payload.channel_id,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `:memo: Do you wanna note *${responseCommand}* ?`,
                },
                accessory: {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "Let's go !",
                  },
                  action_id: "noteSkill",
                },
              },
            ],
            // Text in the notification
            text: "Response from /note",
          });
        }
      } catch (e) {
        console.error(e);
      }
    });
  },
};
