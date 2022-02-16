async function postSingleLineMessage(
  channelID,
  message,
  app,
  slackBotToken,
  notificationMessage
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
      text: `${notificationMessage}`,
    });
  } catch (e) {
    console.error("error", e);
  }
}

async function postTwoLinesMessage(
  channelID,
  title,
  message,
  app,
  slackBotToken,
  notificationMessage
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
            text: title,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message,
          },
        },
      ],
      text: `${notificationMessage}`,
    });
  } catch (e) {
    console.error("error", e);
  }
}

module.exports.postSingleLineMessage = postSingleLineMessage;
module.exports.postTwoLinesMessage = postTwoLinesMessage;
