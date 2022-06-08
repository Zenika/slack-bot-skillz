const { responseByTopic } = require("./responseByTopic");
const { postTwoLinesMessage } = require("../../messages/postMessages");
const { switchCommands } = require("../../lib/utils/switchCommands");
const { getChannelID } = require("../../lib/bolt/getSlackInformations");

module.exports = {
  commandByTopic(app) {
    app.command(
      switchCommands("/bytopic"),
      async ({ ack, payload, context, body }) => {
        await ack();
        try {
          const responseCommand = await responseByTopic(body.text);
          const channelID = await getChannelID(body["user_id"], app, app.token);
          if (responseCommand === "fail") {
            await postTwoLinesMessage(
              channelID,
              "*Command failed* :sweat:",
              ":bulb: *Use this command like this* : /skillz-by-topic [topic] [city] \n\n :clipboard: _Topic_ available : Frontend, Backend, Agilité, Maker, Réseau, Web, Security, Microservices, Network, Ops, Devops, IA, Data, Mobile \n :globe_with_meridians: _City_ available : Paris, Nantes, Singapore, Bordeaux, Brest, Montreal, Grenoble, Lyon, Rennes, Lille",
              app,
              context.botToken,
              "Response from /skillz-by-topic command"
            );
          } else if (responseCommand !== "") {
            await postTwoLinesMessage(
              channelID,
              ":heart: *All these Skillz users at this agency liked this topic* :heart:",
              responseCommand,
              app,
              context.botToken,
              "Response from /skillz-by-topic command"
            );
          } else {
            await postTwoLinesMessage(
              channelID,
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
