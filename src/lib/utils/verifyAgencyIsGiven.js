const { request } = require("./request");
const { getSpecificArgument } = require("./getSpecificArgument");

async function verifyAgencyIsGiven(text) {
  let agency = "";
  try {
    const response = await request(
      `${process.env.HASURA_BASE_URL}/api/rest/get-all-agencies`,
      "GET"
    );

    for (let i = 0; i < response.Agency.length; i++) {
      if (
        (agency = getSpecificArgument(response.Agency[i].name, text)) !== "" &&
        response.Agency[i].name.toUpperCase() === agency.toUpperCase()
      )
        return response.Agency[i].name;
    }
  } catch (e) {
    console.error(e);
  }
  return "";
}

module.exports.verifyAgencyIsGiven = verifyAgencyIsGiven;
