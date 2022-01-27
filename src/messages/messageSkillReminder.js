async function postMessageSkillReminder(
  channelID,
  message,
  app,
  slackBotToken
) {
  try {
    await app.client.chat.postMessage({
      token: slackBotToken,
      channel: channelID,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message,
          },
        },
      ],
      text: "Skillz reminder",
    });
  } catch (e) {
    console.error("error", e);
  }
}
module.exports.postMessageSkillReminder = postMessageSkillReminder;
