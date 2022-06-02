const { responseByTopic } = require("./responseByTopic");
const { postTwoLinesMessage } = require("../../messages/postMessages");
const { switchCommands } = require("../../lib/utils/switchCommands");

module.exports = {
  commandByTopic(app) {
    app.command(
      switchCommands("/bytopic"),
      async ({ ack, payload, context, body }) => {
        await ack();
        try {
          const responseCommand = await responseByTopic(body.text);
          if (responseCommand === "fail") {
            await postTwoLinesMessage(
              payload.channel_id,
              "*Command failed* :sweat:",
              ":bulb: *Use this command like this* : /skillz-by-topic [topic] [city] \n\n :clipboard: _Topic_ available : Frontend, Backend, Agilité, Maker, Réseau, Web, Security, Microservices, Network, Ops, Devops, IA, Data, Mobile \n :globe_with_meridians: _City_ available : Paris, Nantes, Singapore, Bordeaux, Brest, Montreal, Grenoble, Lyon, Rennes, Lille",
              app,
              context.botToken,
              "Response from /skillz-by-topic command"
            );
          } else if (responseCommand !== "") {
            await postTwoLinesMessage(
              payload.channel_id,
              ":heart: *All these Skillz users at this agency liked this topic* :heart:",
              responseCommand,
              app,
              context.botToken,
              "Response from /skillz-by-topic command"
            );
          } else {
            await postTwoLinesMessage(
              payload.channel_id,
              "*Sorry* :sweat:",
              "Nobody like this topic at this agency",
              app,
              context.botToken,
              "Response from /skillz-by-topic command"
            );
          }
        } catch (error) {
          console.error("error", error);
        }
      }
    );
  },
};
