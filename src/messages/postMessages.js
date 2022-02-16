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

async function postThreeLinesMessageReminder(
  channelID,
  introduction,
  title1,
  message1,
  title2,
  message2,
  title3,
  message3,
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
            text: introduction,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title1,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message1,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title2,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message2,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: title3,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message3,
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
module.exports.postThreeLinesMessageReminder = postThreeLinesMessageReminder;
