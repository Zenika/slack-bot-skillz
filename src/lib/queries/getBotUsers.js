const GET_BOT_USERS = `query getBotUsers {
    User(where: {botNotifications: {_eq: true}}) {
      botNotifications
      name
      email
    }
  }
  `;
module.exports.GET_BOT_USERS = GET_BOT_USERS;
