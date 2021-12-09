const { App, ExpressReceiver } = require("@slack/bolt");
const request = require("request");
const qs = require("qs");
require("dotenv").config();
const { Octokit } = require("@octokit/core");
const fetch = require("node-fetch");
const { createOrUpdateTextFile } = require("@octokit/plugin-create-or-update-text-file")

const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  receiver: expressReceiver
});

const hookPersonalMessages = process.env.SLACK_WEBHOOK_MESSAGES;

app.event('bot_added', async ({ event, client, context }) => {
  try {
    const result = await app.client.chat.postMessage({
      app_id: token,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Nice to meet you, i am the Skillz bot. I will keep you updated about the new releases of the Skillz app, and you can use my commands to progress in Skillz !'
          },
        }
      ],
      // Text in the notification
      text: 'Message from Test App'
    });
  }
  catch (error) {
    console.error(error);
  }
  console.log(result)
});

app.event('app_home_opened', async ({ event, client, context }) => {
  try {
    const result = await client.views.publish({
      user_id: event.user,
      view: {
        type: 'home',
        callback_id: 'home_view',

        /* body of the view */
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Welcome to your _App's Home_* :tada:"
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Click me!"
                }
              }
            ]
          }
        ]
      }
    });
  }
  catch (error) {
    console.error(error);
  }
});

app.command('/helloworld', async ({ ack, payload, context }) => {
  ack();

  try {
    const result = await app.client.chat.postMessage({
      token: context.botToken,
      channel: payload.channel_id,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Go ahead. Click it.'
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Click me!'
            },
            action_id: 'button_abc'
          }
        }
      ],
      // Text in the notification
      text: 'Message from Test App'
    });
  }
  catch (error) {
    console.error(error);
  }
});

/* var response = fetch(("https://slack.com/api/users.lookupByEmail?token=" + TOKEN + "&email=" + email), options);
*/
const slackLookupByEmail = async function (email) {
  const result = await app.client.users.lookupByEmail({
    token: process.env.SLACK_BOT_TOKEN,
    email: 'mai-ly.lehoux@zenika.com'
  });
  const userInformation = JSON.parse(result)
  console.log(userInformation.user.id)
  return userInformation.user.id
}

app.action('button_abc', async ({ ack, body, context }) => {
  // Acknowledge the button request
  ack();

  try {
    // Update the message
    const result = await app.client.chat.update({
      token: context.botToken,
      // ts of message to update
      ts: body.message.ts,
      // Channel of message
      channel: body.channel.id,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*The button was clicked!*'
          }
        }
      ],
      text: 'Message from Test App'
    });
  }
  catch (error) {
    console.error(error);
  }
});

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH });

const getData = async function () {
  const res = await octokit.request("GET /repos/{owner}/{repo}/releases", {
    owner: 'MailyLehoux',
    repo: 'bot-skillz',
  });
  const resJSON = JSON.stringify(res);
  return resJSON
};


const old = async function () {
  const res = await octokit.request(`POST /payload`, {
  });
  const resJSON = JSON.parse(res);
  return resJSON
};

(async () => {
  await app.start(process.env.PORT || 3000);
  const test = slackLookupByEmail("mai-ly.lehoux@zenika.com")
  try {
    //const releaseInfo = await getData();
    //const ui = await old(); 
    //console.log("release : " + releaseTrigger)
    const slackBodyGithubMessage = {
      mkdwn: true,
      text: `*${test}*`,
      attachments: ({
        color: 'good',
        text: " "
      })
    }

    const res = await request({
      url: `https://hooks.slack.com/services/${hookPersonalMessages}`,
      method: 'POST',
      body: slackBodyGithubMessage,
      json: true
    })

  } catch (e) {
    console.log('our error', e);
  }
  debugger;
  console.log('⚡️ Bolt app is running!');
})();