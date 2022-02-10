var pjson = require("../../../package.json");
const { postSingleLineMessage } = require("../../messages/postMessages");

module.exports = {
  commandVersion(app) {
    app.command("/version", async ({ ack, payload, context, body }) => {
      await ack();
      try {
        postSingleLineMessage(
          body["channel_id"],
          `The actual version of this bot is ${pjson.version}`,
          app,
          context.botToken
        );
      } catch (e) {
        console.error(e);
      }
    });
  },
};
