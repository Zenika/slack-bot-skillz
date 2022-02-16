//send a message at a specific date

async function scheduledMessage(channelID, message, app, date) {
  /*     const nextmonth = new Date();
    nextmonth.setDate(nextmonth.getDate() + 30);
    nextmonth.setHours(10, 0, 0); */
  try {
    await app.client.chat.scheduleMessage({
      token: app.token,
      channel: channelID,
      post_at: date() / 1000,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message,
          },
        },
      ],
      text: "Reminder from Skillz app",
    });
  } catch (e) {}
}

module.exports.scheduledMessage = scheduledMessage;
