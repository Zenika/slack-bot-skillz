const { getUserEmail } = require("../../lib/bolt/getSlackInformations");
const {
  arrayOfDelayedSkillsByUsers,
} = require("../../cron/arraysOfDelayedSkills");

module.exports = {
  commandOldSkills(app) {
    app.command("/oldSkills", async ({ ack, body }) => {
      await ack();
      const user = body["user_id"];
      try {
        const userEmail = await getUserEmail(user, app, app.token);
        await arrayOfDelayedSkillsByUsers(app, userEmail);
      } catch (error) {
        console.error("error", error);
      }
    });
  },
};
