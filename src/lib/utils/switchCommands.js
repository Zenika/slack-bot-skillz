function switchCommands(command) {
  switch (command) {
    case "/bytopic":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/bytopic";
        default:
          return `/bytopic_${process.env.ENV}`;
      }
    case "/activate":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/activate";
        default:
          return `/activate_${process.env.ENV}`;
      }
    case "/desactivate":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/desactivate";
        default:
          return `/desactivate_${process.env.ENV}`;
      }
    case "/noteSkill":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/noteSkill";
        default:
          return `/noteSkill_${process.env.ENV}`;
      }
    case "/oldSkills":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/oldSkills";
        default:
          return `/oldSkills_${process.env.ENV}`;
      }
    case "/version":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/version";
        default:
          return `/version_${process.env.ENV}`;
      }
    default:
      return "not recognized command";
  }
}

module.exports.switchCommands = switchCommands;
