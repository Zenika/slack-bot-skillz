async function postMessage(channelID, app) {
  try {
    const result = await app.client.chat.postMessage({
      token: process.env.SLACK_BOT_TOKEN,
      channel: channelID,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Hello ! I recognized that you are a Skillz user. Nice to meet you, and keep updated about the updates of Skillz app thanks to me",
          },
        },
      ],
      text: "Message from Skillz-Slack App",
    });
  } catch (e) {
    console.log(e);
  }
}
module.exports.postMessage = postMessage;