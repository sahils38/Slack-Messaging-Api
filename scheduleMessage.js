
require('dotenv').config();
const axios = require('axios');



async function scheduleMessage() {
  const postAt = Math.floor(Date.now() / 1000) + 60; // 60 seconds from now

  const response = await axios.post(
    'https://slack.com/api/chat.scheduleMessage',
    {
      channel: process.env.CHANNEL_ID,
      text: 'This is a scheduled message!',
      post_at: postAt,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(response.data);
}

scheduleMessage();
