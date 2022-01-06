const { getRequest } = require("./lib/getRequest");
const { responseCommandByTopic } = require("./responseCommandByTopic");
module.exports = {
  commandsHandler(app) {
    app.command("/bytopic", async ({ ack, payload, context, body }) => {
      await ack();
      try {
        const response = await getRequest(
          "https://staging.hasura.skillz.zenika.com/api/rest/get-user-infos-agency-topics"
        );
        const responseCommand = await responseCommandByTopic(body.text, response);
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
          ],
          // Text in the notification
          text: "Reponse from Skillz App",
        });
      }
      else {
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
