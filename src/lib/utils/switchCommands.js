function switchCommands(command) {
  switch (command) {
    case "/bytopic":
      switch (process.env.ENV) {
        case "DEV":
          return "/bytopic_d";
        case "STAGING":
          return "/bytopic_s";
        default:
          return "/bytopic";
      }
    case "/activate":
      switch (process.env.ENV) {
        case "DEV":
          return "/activate_d";
        case "STAGING":
          return "/activate_s";
        default:
          return "/activate";
      }
    case "/desactivate":
      switch (process.env.ENV) {
        case "DEV":
          return "/desactivate_d";
        case "STAGING":
          return "/desactivate_s";
        default:
          return "/desactivate";
      }
    case "/noteSkill":
      switch (process.env.ENV) {
        case "DEV":
          return "/noteSkill_d";
        case "STAGING":
          return "/noteSkill_s";
        default:
          return "/noteSkill";
      }
    case "/oldSkills":
      switch (process.env.ENV) {
        case "DEV":
          return "/oldSkills_d";
        case "STAGING":
          return "/oldSkills_s";
        default:
          return "/oldSkills";
      }
    case "/version":
      switch (process.env.ENV) {
        case "DEV":
          return "/version_d";
        case "STAGING":
          return "/version_s";
        default:
          return "/version";
      }
    default:
      return "not recognized command";
  }
}

module.exports.switchCommands = switchCommands;
