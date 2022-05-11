var cron = require("node-cron");
const { arrayOfDelayedSkillsByAllUsers } = require("./arraysOfDelayedSkills");

async function monthlyCron(app) {
  if (process.env.ENV === "DEV") {
    cron.schedule("* * * * *", () => {
      arrayOfDelayedSkillsByAllUsers(app);
    });
  }
  if (process.env.BETA_TESTS) {
    cron.schedule("0 0 0 * *", () => {
      arrayOfDelayedSkillsByAllUsers(app);
    });
  } else {
    cron.schedule("0 14 1 * *", () => {
      arrayOfDelayedSkillsByAllUsers(app);
    });
  }
}

module.exports.monthlyCron = monthlyCron;
