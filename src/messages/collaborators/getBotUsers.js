async function getBotUsers(app) {
  try {
    const list = await app.client.admin.apps.requests.list({
      token: app.token,
    });
    console.log("list", list);
  } catch (e) {
    console.error("error", e);
  }
}

module.exports.getBotUsers = getBotUsers;
