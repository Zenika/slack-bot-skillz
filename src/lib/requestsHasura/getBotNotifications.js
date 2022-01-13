const { request } = require("../utils/request");

async function getBotNotifications(email) {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/get-bot-notifications?email=${email}`,
    "GET"
  );
  return response;
}

module.exports.getBotNotifications = getBotNotifications;
