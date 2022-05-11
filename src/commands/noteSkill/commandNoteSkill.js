const {
  changeCommandValueForView,
} = require("../../views/noteSkill/viewNoteSkill");
const {
  changeCommandValueForAction,
} = require("../../actions/noteSkill/actionNoteSkill");
const {
  postTwoLinesMessageWithoutTitle,
} = require("../../messages/postMessages");
const { switchCommands } = require("../../lib/utils/switchCommands");

module.exports = {
  commandNoteSkill(app) {
    app.command(
      switchCommands("/noteSkill"),
      async ({ ack, payload, context, body }) => {
        await ack();
        const responseCommand = await changeCommandValueForView(body.text);
        await changeCommandValueForAction(body.text);

        try {
          if (responseCommand === "fail") {
            await postTwoLinesMessageWithoutTitle(
              payload.channel_id,
              ":sweat: Sorry, this I can't understand you. You can create a skill trough the Skillz app (https://skillz.zenika.com/skills/mine/languages-and-frameworks/add) or you can use this command like this : */skillz-noteSkill [skill name]*",
              ":bulb: _Get the list of some skills to note with */skillz-reminderMessage* command_",
              app,
              context.botToken,
              "Response from /skillz-noteSkill"
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
              text: "Response from /skillz-noteSkill",
            });
          }
        } catch (e) {
          console.error(e);
        }
      }
    );
  },
};
