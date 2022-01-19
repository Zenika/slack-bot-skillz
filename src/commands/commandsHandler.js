const { commandByTopic } = require("./bytopic/commandByTopic");
const { commandNoteSkill } = require("./noteSkill/commandNoteSkill");
module.exports = {
  commandsHandler(app) {
    commandNoteSkill(app);
    commandByTopic(app);
  },
};
