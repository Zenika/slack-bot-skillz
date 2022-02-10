async function postSingleLineMessage(channelID, message, app, slackBotToken) {
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
      text: "Message from Skillz-Slack App",
    });
  } catch (e) {
    console.error("error", e);
  }
}
module.exports.postSingleLineMessage = postSingleLineMessage;
