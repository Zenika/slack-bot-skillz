const { request } = require("../utils/requestGraphQL");
const { GET_BOT_USERS } = require("../queries/getBotUsers");

async function getBotUsers() {
  const response = await request(GET_BOT_USERS);
  return response.data;
}

module.exports.getBotUsers = getBotUsers;
