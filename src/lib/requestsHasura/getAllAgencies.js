const { request } = require("../utils/request");

async function getAllAgencies() {
  try {
    const response = await request(
      `${process.env.HASURA_BASE_URL}/api/rest/get-all-agencies`,
      "GET"
    );
    return response;
  } catch (e) {
    console.error(e);
  }
}

module.exports.getAllAgencies = getAllAgencies;
