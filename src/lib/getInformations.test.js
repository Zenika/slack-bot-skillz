const { getChannelID } = require("./getInformations");

const myApp = {
  client: {
    conversations: {
      open: jest.fn().mockResolvedValue({
        ok: true,
        channel: {
          id: "result",
        },
      }),
    },
  },
};

it("test GetChannelID", async () => {
  const result = await getChannelID("testID", myApp, "testToken");
  expect(result).toBe("result");
});
it("test Informations", async () => {
  expect((await myApp.client.conversations.open()).ok).toBe(true);
});
