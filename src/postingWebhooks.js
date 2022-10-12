const { request } = require("../utils/requestsSlack.js");

async function postingWebhooks() {
    const variables = {
        "text": "Hello je suis une release"
    }
  try {
    const response = await request("https://hooks.slack.com/services/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");
    console.log("responssss", response)
    return response;
  } catch (e) {
    console.error(e);
  }
}

module.exports.postingWebhooks = postingWebhooks;