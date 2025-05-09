require('dotenv').config();

const axios = require('axios');


async function fetchMessages() {
  const response = await axios.get('https://slack.com/api/conversations.history', {
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    },
    params: {
      channel: process.env.CHANNEL_ID,
      limit: 5, 
    },
  });

  console.log('Fetched messages:', response.data.messages);
}

fetchMessages();
