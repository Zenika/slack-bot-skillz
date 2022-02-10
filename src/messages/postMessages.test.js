const { postSingleLineMessage } = require("./postMessages");

const myAppClientChat = {
  client: {
    chat: {
      postMessage: jest.fn().mockResolvedValue({
        channel: {
          id: "result",
        },
      }),
    },
  },
};

it("the postMessage fetch fails with an error", async () => {
  try {
    await postSingleLineMessage("testID", myAppClientChat, "testToken");
  } catch (e) {
    expect(e).toMatch("error");
  }
});
