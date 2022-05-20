# Slackbot

Slack bot for Skillz App - Keep updated about the new releases of the app, and your activity

## 📖 Documentation

All the informations about this bot (configuration, etc) are in [this file](https://docs.google.com/document/d/1VNHepiCHvmf6mLz2AZmaUNJzSKHFuQS4N2nUNNzKepY).

Architecture schéma is in [this file](https://docs.google.com/drawings/d/19-DK9jNgzQbMpmeW5tOe-XJ6Q1VFPw1HawUwxJXSqzA).

## 🏗 Development

### Configuration

1/ Start by running : `npm i`
2/ Create an file named `.env`, then find variables thanks to the documentation : https://docs.google.com/document/d/1VNHepiCHvmf6mLz2AZmaUNJzSKHFuQS4N2nUNNzKepY/edit#
3/ Launch the app : `npm run dev`

### Testing

🚧 Tests are in progress. 🚧

The test library used is [Jest](https://jestjs.io/fr/). You can use tests with this command : `npm run test`.

The [`coverage`](https://www.npmjs.com/package/coverage) library is installed on this project. You can check the coverage of this project with this command : `npm run coverage`.

### Versioning

_Check the actual version of the bots thanks to /skillz-version-{ENV}_. If you want to update it, change the "version" field from the package.json
