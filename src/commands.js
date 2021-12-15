module.exports = {
commandsHandler (app) {
    app.command('/helloworld', async ({ ack, payload, context }) => {
        ack();
    
        try {
          const result = await app.client.chat.postMessage({
            token: context.botToken,
            channel: payload.channel_id,
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: 'Hey bro'
                }
              }
            ],
            // Text in the notification
            text: 'Message from Test App'
          });
        }
        catch (error) {
          console.error(error);
        }
      })
    }
}