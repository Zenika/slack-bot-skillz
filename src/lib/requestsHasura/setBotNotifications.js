const { request } = require("../utils/request");

async function setBotNotifications(email, notifications) {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/set-bot-notifications?email=${email}&botNotifications=${notifications}`,
    "PUT"
  );
  return response;
}

module.exports.setBotNotifications = setBotNotifications;
