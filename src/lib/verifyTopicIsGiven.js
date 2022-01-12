const { getRequest } = require("./getRequest");
const { getSpecificArgument } = require("./getSpecificArgument");

async function verifyTopicIsGiven(text) {
  let topic = "";
  try {
    const response = await getRequest(
      `${process.env.HASURA_BASE_URL}/api/rest/get-all-topics`
    );
    for (let i = 0; i < response.Topic.length; i++) {
      if (
        (topic = getSpecificArgument(response.Topic[i].name, text)) !== "" &&
        response.Topic[i].name.toUpperCase() === topic.toUpperCase()
      )
        return response.Topic[i].name;
    }
  } catch (e) {
    console.error(e);
  }
  return "";
}

module.exports.verifyTopicIsGiven = verifyTopicIsGiven;
