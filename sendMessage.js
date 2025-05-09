require('dotenv').config();
const axios = require("axios");


async function sendMessageAndCaptureTS() {
  try {
   
    const response = await axios.post(
      "https://slack.com/api/chat.postMessage",
      {
        channel: process.env.CHANNEL_ID,
        text: "Have fun",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.ok) {
      // Capture the message timestamp (ts)
      const messageTs = response.data.ts;
      console.log("Message sent successfully!");
      console.log(" Message timestamp (ts):", messageTs);

      
      return messageTs;  
    } else {
      console.error(" Slack API error:", response.data.error);
    }
  } catch (error) {
    console.error(" Request failed:", error.response?.data || error.message);
  }
}


sendMessageAndCaptureTS();




