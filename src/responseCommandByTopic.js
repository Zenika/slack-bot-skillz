const { verifyAgencyIsGiven } = require("./lib/verifyAgencyIsGiven");
const { verifyTopicIsGiven } = require("./lib/verifyTopicIsGiven");

async function responseCommandByTopic(text, response) {
  let names = "";
  let agency = await verifyAgencyIsGiven(text);
  if (agency === "")
    return "fail";
  let topic = await verifyTopicIsGiven(text);
  if (topic === "")
    return "fail";
  for (let i = 0; i < response.User.length; i++) {
    for (let j = 0; j < response.User[i].UserTopics.length; j++) {
      if (response.User[i].UserTopics[j].Topic.name === topic && response.User[i].UserAgencies[0].agency === agency)
        names = names + `:bulb: *${response.User[i].name}* liked ${topic} watch his or her profile there with the link below \n :mag: https://skillz.zenika.com/profile/${response.User[i].email}\n\n`
    }
  }
  return names;
}

module.exports.responseCommandByTopic = responseCommandByTopic;
