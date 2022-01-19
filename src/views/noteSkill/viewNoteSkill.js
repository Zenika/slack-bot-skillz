const { getUserEmail } = require("../../lib/bolt/getSlackInformations");
const { request } = require("../../lib/utils/request");

module.exports = {
  viewNoteSkill(app) {
    app.view("noteSkill", async ({ ack, body, view }) => {
      await ack();
      const skillValue =
        view["state"]["values"]["skill"]["informationModal"]["selected_option"][
          "value"
        ];
      const desireValue =
        view["state"]["values"]["desire"]["informationModal"][
          "selected_option"
        ]["value"];
      const user = body["user"]["id"];
      try {
        const userEmail = await getUserEmail(user, app, app.token);
        await request(
          `${process.env.HASURA_BASE_URL}/api/rest/update-skill?email=${userEmail}&skillId=0ffd1717-d46b-4a76-8dec-548505c18fcb&skillLevel=${skillValue}&desireLevel=${desireValue}`,
          "PUT"
        );
      } catch (e) {
        console.error("error", e);
      }
    });
  },
};
