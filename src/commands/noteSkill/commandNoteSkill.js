const { response } = require("express");
//const { responseNote } = require("./responseNote")
const { changeCommandValueForView } = require("../../views/noteSkill/viewNoteSkill")
const { changeCommandValueForAction } = require("../../actions/noteSkill/actionNoteSkill")

module.exports = {
  commandNoteSkill(app) {
    app.command("/note", async ({ ack, payload, context, body }) => {
      await ack();
      const responseCommand = await changeCommandValueForView(body.text)
      await changeCommandValueForAction(body.text);
      
      try {
        //const responseCommand = await responseNote(body.text);
        if (responseCommand === "fail") {
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: payload.channel_id,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: ":sweat: Sorry, this skill does not exists. You can create one trough the Skillz app",
                },
              },
            ],
            // Text in the notification
            text: "Reponse from Skillz App",
          });
        }
        else {
        await app.client.chat.postMessage({
          token: context.botToken,
          channel: payload.channel_id,
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "Do you wanna note this skill ?",
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
          text: "Reponse from Skillz App",
        });
      }
      } catch (e) {
        console.error(e);
      }
    });
  },
};
