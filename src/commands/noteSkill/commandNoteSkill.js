module.exports = {
  commandNoteSkill(app) {
    app.command("/testlocal", async ({ ack, payload, context, logger }) => {
      await ack();
      // Acknowledge the command request
      try {
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
      } catch (e) {
        console.error(e);
      }
    });
  },
};
