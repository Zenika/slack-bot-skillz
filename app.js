const { App, ExpressReceiver } = require("@slack/bolt");
const request = require("request");
const qs = require("qs");
require("dotenv").config();
const { Octokit } = require("@octokit/core");
const fetch = require("node-fetch");
const { createOrUpdateTextFile } = require("@octokit/plugin-create-or-update-text-file");
const { post } = require("request");

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
  try {
  const result = await app.client.users.lookupByEmail({
    token: process.env.SLACK_BOT_TOKEN,
    email: email
  });
  console.log(result.user.id)
  //const userInformation = JSON.parse(result)
  return result.user
  
} catch (e) {
    console.log(e)
  }
}

const sendMessagesToAnUser = async function (email) {
  try {
  const result = await app.client.users.lookupByEmail({
    token: process.env.SLACK_BOT_TOKEN,
    email: email
  });
  const channelID = await getChannelID(result.user.id)
  console.log(channelID)
  postMessage(channelID)
  return result.user
  
} catch (e) {
    console.log(e)
  }
}

const getChannelID = async function (userID) {
  try {
    const result = await app.client.conversations.open({
      token: process.env.SLACK_BOT_TOKEN,
      users: userID
    });
    if (result.ok === true) {
      //console.log(result.channel.id)
      return result.channel.id
    }
  } catch(e) {
    console.log(e)
  }
  return "";
}

const postMessage = async function (channelID) {
  console.log(channelID)
  try {
    const result = await app.client.chat.postMessage({
      token: process.env.SLACK_BOT_TOKEN,
      channel: channelID,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Hello ! I recognized that you are a Skillz user. Nice to meet you, and keep updated about the updates of Skillz app thanks to me'
          },
        }
      ],
      text: 'Message from Skillz-Slack App'
    });
  } catch (e) {
    console.log(e)
  }
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

const releasesListener = async () => {
  try {
    const response = await fetch('/payload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }/* ,
      body: JSON.stringify({
        title: "title",
        body: "content."
      }) */
    });
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(error)
  } 
  return data
}


/* const old = async function () {
  const res = await octokit.request(`POST /payload`, {
  });
  const resJSON = JSON.parse(res);
  return res
}; */

(async () => {
  await app.start(process.env.PORT || 3000);
  sendMessagesToAnUser("jean-philippe.baconnais@zenika.com")
/*   const infosUser = slackLookupByEmail("mai-ly.lehoux@zenika.com");
  if (infosUser != undefined && infosUser.id != undefined) {
    console.log(infosUser)
    postMessage(getChannelID( infosUser.id))
  } */
  //const test = releasesListener();
  //const test = old()
  /* try {
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
  } */
  debugger;
  console.log('⚡️ Bolt app is running!');
})();