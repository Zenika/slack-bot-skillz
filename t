display_information:
  name: Skillz-bot-dev
  description: Keep updated about Skillz app
  background_color: "#0000AA"
  long_description: "SkillZ is an application for managing the skills and competences of Zenika's different collaborators. It aims at gathering your feedbacks in order to match the different profiles with missions or trainings that correspond the best.\r

    \r

    This bot helps keep your Skillz profile up to date, and facilitates skill completion. If you have any problem or question, you can contact : Hugo Wood or Mai-ly Lehoux on Slack."
features:
  app_home:
    home_tab_enabled: true
    messages_tab_enabled: true
    messages_tab_read_only_enabled: false
  bot_user:
    display_name: Bot-skillz
    always_online: true
  slash_commands:
    - command: /skillz-by-topic_DEV
      url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
      description: Get users that love a specific topic */bytopic [name] [city]*
      should_escape: false
    - command: /skillz-note-skill_DEV
      url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
      description: Note skills of your choice */note [skills name]*
      should_escape: false
    - command: /skillz-activate_DEV
      url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
      description: Set your reminder as active. Default -> activate
      should_escape: false
    - command: /skillz-desactivate_DEV
      url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
      description: Set your reminder as inactive. Default -> activate
      should_escape: false
    - command: /skillz-reminder-message_DEV
      url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
      description: Get the list of skills that not had been noted since 1 month
      should_escape: false
    - command: /skillz-version_DEV
      url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
      description: Get actual version of the Skillz bot
      should_escape: false
    - command: /skillz-bot-users_DEV
      url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
      description: Get actual version of the Skillz bot
      should_escape: false
oauth_config:
  scopes:
    user:
      - admin
      - admin.analytics:read
    bot:
      - chat:write
      - chat:write.customize
      - commands
      - im:write
      - incoming-webhook
      - mpim:write
      - reactions:write
      - users.profile:read
      - users:read
      - users:read.email
settings:
  event_subscriptions:
    request_url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
    bot_events:
      - app_home_opened
  interactivity:
    is_enabled: true
    request_url: https://ca67-2a01-cb05-8da2-b500-977d-4466-dc09-3beb.ngrok.io/slack/events
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false