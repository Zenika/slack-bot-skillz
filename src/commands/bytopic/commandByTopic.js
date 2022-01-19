const { responseByTopic } = require("./responseByTopic");
module.exports = {
  commandByTopic(app) {
    app.command("/bytopiclocal", async ({ ack, payload, context, body }) => {
      await ack();
      try {
        const responseCommand = await responseByTopic(body.text);
        if (responseCommand === "fail") {
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: payload.channel_id,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "*Command failed* :sweat:",
                },
              },
              {
                type: "divider",
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: ":bulb: *Use this command like this* : _/bytopic [topic] [city]_ \n\n :clipboard: _Topic_ available : Frontend, Backend, Agilité, Maker, Réseau, Web, Security, Microservices, Network, Ops, Devops, IA, Data, Mobile \n :globe_with_meridians: _City_ available : Paris, Nantes, Singapore, Bordeaux, Brest, Montreal, Grenoble, Lyon, Rennes, Lille",
                },
              },
              {
                type: "divider",
              },
            ],
            // Text in the notification
            text: "Reponse from Skillz App",
          });
        } else if (responseCommand !== "") {
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: payload.channel_id,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: ":heart: *All these Skillz users at this agency liked this topic* :heart:",
                },
              },
              {
                type: "divider",
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: responseCommand,
                },
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "\n",
                },
              },
              {
                type: "divider",
              },
            ],
            // Text in the notification
            text: "Reponse from Skillz App",
          });
        } else {
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: payload.channel_id,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "*Sorry* :sweat:",
                },
              },
              {
                type: "divider",
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "Nobody like this topic at this agency",
                },
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "\n",
                },
              },
              {
                type: "divider",
              },
            ],
            // Text in the notification
            text: "Reponse from Skillz App",
          });
        }
      } catch (error) {
        console.error("error", error);
      }
    });
  },
};
