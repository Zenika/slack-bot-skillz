const { request } = require("../utils/request");

async function getAllTopics() {
  try {
    const response = await request(
      `${process.env.HASURA_BASE_URL}/api/rest/get-all-topics`,
      "GET"
    );
    return response;
  } catch (e) {
    console.error(e);
  }
}

module.exports.getAllTopics = getAllTopics;
