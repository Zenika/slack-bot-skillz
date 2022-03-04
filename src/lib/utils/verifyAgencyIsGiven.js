const { getSpecificArgument } = require("./getSpecificArgument");
const { getAllAgencies } = require("../requestsHasura/getAllAgencies");

async function verifyAgencyIsGiven(text) {
  let agency = "";
  try {
    const response = await getAllAgencies();

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
