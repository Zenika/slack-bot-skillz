const { request } = require("./lib/utils/requestsSlack");

async function postingWebhooks() {
  const variables = {
    text: "Hello je suis une release",
  };
  try {
    const response = await request("");
    console.log("responssss", response);
    return response;
  } catch (e) {
    console.error(e);
  }
}

module.exports.postingWebhooks = postingWebhooks;
