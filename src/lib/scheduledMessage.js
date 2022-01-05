async function scheduledMessage(channelID, message, app) {
    const nextmonth = new Date();
    nextmonth.setDate(nextmonth.getDate() + 30);
    nextmonth.setHours(10, 0, 0);
    try {
        await app.client.chat.scheduleMessage({
            token: app.token,
            channel: channelID,
            post_at: next_month()/1000,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: message,
                },
              },
            ],
            text: "Reminder to note a Skillz skill",
          });
    }
    catch(e) {

    }
};

module.exports.scheduledMessage = scheduledMessage;