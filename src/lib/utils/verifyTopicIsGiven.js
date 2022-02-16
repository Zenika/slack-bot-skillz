const { request } = require("./request");
const { getSpecificArgument } = require("./getSpecificArgument");
const { getAllTopics } = require("../requestsHasura/getAllTopics");

async function verifyTopicIsGiven(text) {
  let topic = "";
  try {
    const response = await getAllTopics();
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
